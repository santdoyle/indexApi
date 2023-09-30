import fetch from "node-fetch";
import {google} from 'googleapis'
import key from "./authData.json" assert { type: "json" };
import listUrls from "./urls.js";
import FS from 'fs'

/**
 * Google indexing auth. It's needed a data json file 
 */
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/indexing"],
  null
);

const tokens = await jwtClient.authorize();

const indexUrl = async () => {
    
    for (const url of listUrls) {

        /**
         * Loop and Fetch urls 
         */
        setTimeout(async () => {
            if(tokens.access_token){
                const res = await fetch(
                    'https://indexing.googleapis.com/v3/urlNotifications:publish',
                    {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + tokens.access_token
                    },
                    body: JSON.stringify({
                        url: url,
                        type: 'URL_UPDATED'
                    })
                    }
                );
                
                if (!res.ok) {
                    console.error(await res.text());
                }else{
                    const result = await res.json()
                    const shortcode = `${result.urlNotificationMetadata}\r\n`
                    const writer = FS.appendFileSync('./nuevo.txt', shortcode)
    
                    console.log(result.urlNotificationMetadata.url, "- Url enviada correctamente")
                }
            }else{
                console.log("No token")
            }
    
        }, 500)
        
    }

}


indexUrl()

