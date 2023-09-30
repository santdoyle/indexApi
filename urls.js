/**
 * Set urls to index as an Array
 */
const listUrls = [
"https://www.gipper.com/sports-templates/golf-stats-graphic-template",
"https://www.gipper.com/sports-templates/football-rankings-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-bracket-graphic-template",
"https://www.gipper.com/sports-templates/basketball-schedule-graphic-template",
"https://www.gipper.com/sports-templates/soccer-lineup-graphic-template",
"https://www.gipper.com/sports-templates/track-field-commitment-graphic-template",
"https://www.gipper.com/sports-templates/golf-score-update-graphic-template",
"https://www.gipper.com/sports-templates/track-field-ticketing-graphic-template",
"https://www.gipper.com/sports-templates/swimming-lineup-graphic-template",
"https://www.gipper.com/sports-templates/football-roster-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-meet-day-graphic-template",
"https://www.gipper.com/sports-templates/bowling-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/soccer-countdown-graphic-template",
"https://www.gipper.com/sports-templates/golf-commitment-graphic-template",
"https://www.gipper.com/sports-templates/swimming-commitment-graphic-template",
"https://www.gipper.com/sports-templates/track-field-scoreboard-graphic-template",
"https://www.gipper.com/sports-templates/football-bracket-graphic-template",
"https://www.gipper.com/sports-templates/bowling-score-bugs-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-rankings-graphic-template",
"https://www.gipper.com/sports-templates/football-senior-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/track-field-annoucement-graphic-template",
"https://www.gipper.com/sports-templates/basketball-holidays-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-countdown-graphic-template",
"https://www.gipper.com/sports-templates/bowling-final-score-graphic-template",
"https://www.gipper.com/sports-templates/golf-countdown-graphic-template",
"https://www.gipper.com/sports-templates/basketball-rankings-graphic-template",
"https://www.gipper.com/sports-templates/swimming-roster-graphic-template",
"https://www.gipper.com/sports-templates/football-player-of-the-week-graphic-template",
"https://www.gipper.com/sports-templates/bowling-countdown-graphic-template",
"https://www.gipper.com/sports-templates/swimming-bracket-graphic-template",
"https://www.gipper.com/sports-templates/swimming-countdown-graphic-template",
"https://www.gipper.com/sports-templates/basketball-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/track-field-player-of-the-week-graphic-template",
"https://www.gipper.com/sports-templates/track-field-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/golf-senior-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/bowling-schedule-graphic-template",
"https://www.gipper.com/sports-templates/golf-match-day-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-events-graphic-template",
"https://www.gipper.com/sports-templates/football-stats-graphic-template",
"https://www.gipper.com/sports-templates",
"https://www.gipper.com/sports-templates/bowling-player-of-the-week-graphic-template",
"https://www.gipper.com/sports-templates/basketball-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-final-score-graphic-template",
"https://www.gipper.com/sports-templates/golf-schedule-graphic-template",
"https://www.gipper.com/sports-templates/soccer-events-graphic-template",
"https://www.gipper.com/sports-templates/track-field-roster-graphic-template",
"https://www.gipper.com/sports-templates/football-countdown-graphic-template",
"https://www.gipper.com/sports-templates/swimming-award-graphic-template",
"https://www.gipper.com/sports-templates/soccer-senior-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/basketball-sponsorship-graphic-template",
"https://www.gipper.com/sports-templates/swimming-game-day-graphic-template",
"https://www.gipper.com/sports-templates/swimming-stats-graphic-template",
"https://www.gipper.com/sports-templates/swimming-quotes-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-score-update-graphic-template",
"https://www.gipper.com/sports-templates/soccer-stats-graphic-template",
"https://www.gipper.com/sports-templates/basketball-roster-graphic-template",
"https://www.gipper.com/sports-templates/basketball-stats-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-player-of-the-week-graphic-template",
"https://www.gipper.com/sports-templates/football-starting-lineup-graphic-template",
"https://www.gipper.com/sports-templates/soccer-sponsorship-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-holidays-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-quotes-graphic-template",
"https://www.gipper.com/sports-templates/golf-annoucement-graphic-template",
"https://www.gipper.com/sports-templates/bowling-standings-graphic-template",
"https://www.gipper.com/sports-templates/basketball-bracket-graphic-template",
"https://www.gipper.com/sports-templates/track-field-bracket-graphic-template",
"https://www.gipper.com/sports-templates/swimming-score-update-graphic-template",
"https://www.gipper.com/sports-templates/bowling-lineup-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-starting-lineup-graphic-template",
"https://www.gipper.com/sports-templates/swimming-ticketing-graphic-template",
"https://www.gipper.com/sports-templates/golf-holidays-graphic-template",
"https://www.gipper.com/sports-templates/golf-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/football-holidays-graphic-template",
"https://www.gipper.com/sports-templates/football-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-birthday-graphic-template",
"https://www.gipper.com/sports-templates/football-standings-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-match-day-graphic-template",
"https://www.gipper.com/sports-templates/football-final-score-graphic-template",
"https://www.gipper.com/sports-templates/bowling-scoreboard-graphic-template",
"https://www.gipper.com/sports-templates/basketball-match-day-graphic-template",
"https://www.gipper.com/sports-templates/track-field-stats-graphic-template",
"https://www.gipper.com/sports-templates/track-field-schedule-graphic-template",
"https://www.gipper.com/sports-templates/bowling-meet-day-graphic-template",
"https://www.gipper.com/sports-templates/soccer-holidays-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-scoreboard-graphic-template",
"https://www.gipper.com/sports-templates/swimming-starting-lineup-graphic-template",
"https://www.gipper.com/sports-templates/golf-bracket-graphic-template",
"https://www.gipper.com/sports-templates/golf-meet-day-graphic-template",
"https://www.gipper.com/sports-templates/football-game-day-graphic-template",
"https://www.gipper.com/sports-templates/track-field-senior-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/basketball-ticketing-graphic-template",
"https://www.gipper.com/sports-templates/soccer-final-score-graphic-template",
"https://www.gipper.com/sports-templates/swimming-player-of-the-week-graphic-template",
"https://www.gipper.com/sports-templates/soccer-roster-graphic-template",
"https://www.gipper.com/sports-templates/golf-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/golf-game-day-graphic-template",
"https://www.gipper.com/sports-templates/bowling-quotes-graphic-template",
"https://www.gipper.com/sports-templates/basketball-senior-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/bowling-commitment-graphic-template",
"https://www.gipper.com/sports-templates/bowling-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/swimming-senior-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/golf-events-graphic-template",
"https://www.gipper.com/sports-templates/basketball-events-graphic-template",
"https://www.gipper.com/sports-templates/basketball-standings-graphic-template",
"https://www.gipper.com/sports-templates/swimming-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-sponsorship-graphic-template",
"https://www.gipper.com/sports-templates/bowling-rankings-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-game-day-graphic-template",
"https://www.gipper.com/sports-templates/soccer-quotes-graphic-template",
"https://www.gipper.com/sports-templates/soccer-commitment-graphic-template",
"https://www.gipper.com/sports-templates/soccer-match-day-graphic-template",
"https://www.gipper.com/sports-templates/bowling-annoucement-graphic-template",
"https://www.gipper.com/sports-templates/football-lineup-graphic-template",
"https://www.gipper.com/sports-templates/swimming-events-graphic-template",
"https://www.gipper.com/sports-templates/basketball-starting-lineup-graphic-template",
"https://www.gipper.com/sports-templates/track-field-bracket-graphic-template",
"https://www.gipper.com/sports-templates/bowling-stats-graphic-template",
"https://www.gipper.com/sports-templates/basketball-countdown-graphic-template",
"https://www.gipper.com/sports-templates/bowling-game-day-graphic-template",
"https://www.gipper.com/sports-templates/soccer-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/football-award-graphic-template",
"https://www.gipper.com/sports-templates/football-scoreboard-graphic-template",
"https://www.gipper.com/sports-templates/golf-score-bugs-graphic-template",
"https://www.gipper.com/sports-templates/bowling-holidays-graphic-template",
"https://www.gipper.com/sports-templates/golf-player-of-the-week-graphic-template",
"https://www.gipper.com/sports-templates/soccer-award-graphic-template",
"https://www.gipper.com/sports-templates/track-field-match-day-graphic-template",
"https://www.gipper.com/sports-templates/track-field-birthday-graphic-template",
"https://www.gipper.com/sports-templates/soccer-score-update-graphic-template",
"https://www.gipper.com/sports-templates/golf-birthday-graphic-template",
"https://www.gipper.com/sports-templates/swimming-birthday-graphic-template",
"https://www.gipper.com/sports-templates/soccer-player-of-the-week-graphic-template",
"https://www.gipper.com/sports-templates/soccer-rankings-graphic-template",
"https://www.gipper.com/sports-templates/soccer-ticketing-graphic-template",
"https://www.gipper.com/sports-templates/track-field-final-score-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-senior-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/basketball-player-of-the-week-graphic-template",
"https://www.gipper.com/sports-templates/track-field-standings-graphic-template",
"https://www.gipper.com/sports-templates/basketball-scoreboard-graphic-template",
"https://www.gipper.com/sports-templates/golf-quotes-graphic-template",
"https://www.gipper.com/sports-templates/track-field-score-bugs-graphic-template",
"https://www.gipper.com/sports-templates/football-sponsorship-graphic-template",
"https://www.gipper.com/sports-templates/golf-roster-graphic-template",
"https://www.gipper.com/sports-templates/swimming-final-score-graphic-template",
"https://www.gipper.com/sports-templates/bowling-sponsorship-graphic-template",
"https://www.gipper.com/sports-templates/soccer-bracket-graphic-template",
"https://www.gipper.com/sports-templates/bowling-ticketing-graphic-template",
"https://www.gipper.com/sports-templates/swimming-sponsorship-graphic-template",
"https://www.gipper.com/sports-templates/bowling-birthday-graphic-template",
"https://www.gipper.com/sports-templates/bowling-score-update-graphic-template",
"https://www.gipper.com/sports-templates/football-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/track-field-quotes-graphic-template",
"https://www.gipper.com/sports-templates/football-score-update-graphic-template",
"https://www.gipper.com/sports-templates/golf-final-score-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-commitment-graphic-template",
"https://www.gipper.com/sports-templates/swimming-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/football-events-graphic-template",
"https://www.gipper.com/sports-templates/soccer-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/swimming-rankings-graphic-template",
"https://www.gipper.com/sports-templates/basketball-quotes-graphic-template",
"https://www.gipper.com/sports-templates/bowling-roster-graphic-template",
"https://www.gipper.com/sports-templates/swimming-holidays-graphic-template",
"https://www.gipper.com/sports-templates/track-field-holidays-graphic-template",
"https://www.gipper.com/sports-templates/bowling-events-graphic-template",
"https://www.gipper.com/sports-templates/golf-lineup-graphic-template",
"https://www.gipper.com/sports-templates/golf-ticketing-graphic-template",
"https://www.gipper.com/sports-templates/track-field-starting-lineup-graphic-template",
"https://www.gipper.com/sports-templates/swimming-scoreboard-graphic-template",
"https://www.gipper.com/sports-templates/basketball-award-graphic-template",
"https://www.gipper.com/sports-templates/soccer-schedule-graphic-template",
"https://www.gipper.com/sports-templates/swimming-standings-graphic-template",
"https://www.gipper.com/sports-templates/golf-starting-lineup-graphic-template",
"https://www.gipper.com/sports-templates/golf-standings-graphic-template",
"https://www.gipper.com/sports-templates/bowling-award-graphic-template",
"https://www.gipper.com/sports-templates/track-field-rankings-graphic-template",
"https://www.gipper.com/sports-templates/golf-award-graphic-template",
"https://www.gipper.com/sports-templates/soccer-scoreboard-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-score-bugs-graphic-template",
"https://www.gipper.com/sports-templates/track-field-events-graphic-template",
"https://www.gipper.com/sports-templates/basketball-birthday-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-annoucement-graphic-template",
"https://www.gipper.com/sports-templates/basketball-commitment-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/basketball-lineup-graphic-template",
"https://www.gipper.com/sports-templates/swimming-meet-day-graphic-template",
"https://www.gipper.com/sports-templates/soccer-starting-lineup-graphic-template",
"https://www.gipper.com/sports-templates/golf-scoreboard-graphic-template",
"https://www.gipper.com/sports-templates/track-field-countdown-graphic-template",
"https://www.gipper.com/sports-templates/bowling-senior-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/track-field-game-day-graphic-template",
"https://www.gipper.com/sports-templates/track-field-lineup-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-award-graphic-template",
"https://www.gipper.com/sports-templates/bowling-starting-lineup-graphic-template",
"https://www.gipper.com/sports-templates/soccer-standings-graphic-template",
"https://www.gipper.com/sports-templates/track-field-sponsorship-graphic-template",
"https://www.gipper.com/sports-templates/track-field-recruiting-graphic-template",
"https://www.gipper.com/sports-templates/swimming-score-bugs-graphic-template",
"https://www.gipper.com/sports-templates/football-ticketing-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-ticketing-graphic-template",
"https://www.gipper.com/sports-templates/swimming-match-day-graphic-template",
"https://www.gipper.com/sports-templates/track-field-meet-day-graphic-template",
"https://www.gipper.com/sports-templates/football-schedule-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-schedule-graphic-template",
"https://www.gipper.com/sports-templates/football-commitment-graphic-template",
"https://www.gipper.com/sports-templates/swimming-annoucement-graphic-template",
"https://www.gipper.com/sports-templates/swimming-schedule-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-lineup-graphic-template",
"https://www.gipper.com/sports-templates/track-field-award-graphic-template",
"https://www.gipper.com/sports-templates/bowling-bracket-graphic-template",
"https://www.gipper.com/sports-templates/football-quotes-graphic-template",
"https://www.gipper.com/sports-templates/basketball-score-update-graphic-template",
"https://www.gipper.com/sports-templates/gymnastics-roster-graphic-template",
"https://www.gipper.com/sports-templates/basketball-final-score-graphic-template",
"https://www.gipper.com/sports-templates/track-field-spotlight-graphic-template",
"https://www.gipper.com/sports-templates/football-birthday-graphic-template",
"https://www.gipper.com/sports-templates/bowling-match-day-graphic-template",
"https://www.gipper.com/sports-templates/golf-sponsorship-graphic-template",
"https://www.gipper.com/sports-templates/track-field-score-update-graphic-template"
]

export default listUrls