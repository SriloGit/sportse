## Presentation
SportSee project is an application to follow the daily progress through analytics dashboard.

## Prerequisites
NodeJS (v16.17.0)  
NPM (8.15.0) 
React (v18.2.0)   
React Router Dom (v6.3.0)  
Recharts (v2.1.13)  

npm install

## Installing the app
Clone the repository : https://github.com/SriloGit/sportse.git
Clone the repository : https://github.com/SriloGit/P9-front-end-dashboard.git

### Backend 
    Open a new terminal and run cd P9-front-end-dashboard command  
    Then run the npm start command the backend will open http://localhost:3000

### FrontEnd
    Open a new terminal and run cd sportsee  
    Then run the npm start command will allow you to run the application on http://localhost:3001


Getting Started with Create React App  
This project was bootstrapped with Create React App.

### To use mocked data or API :
- Go to the profil.js file in the sportsee/src/pages folder  
- Uncomment the import dataUser you want to use (fetchMocked or fetchApi) and comment the other one
- Follow the instuctions below

## NOTA : 2 users have been created
    id 12 and 18


### Author
Jeremy CHAMBON

### Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

### Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.
