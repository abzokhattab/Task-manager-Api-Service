# Task-manager-Api-Service
mongodb , RestApi , nodejs 

# Project Title
Task-manager-Api-Service

# Deployment
This api was deployed on Heroku in 
this link : https://abzo-user-task-api.herokuapp.com/

# intro 
this repo covers : mongodb and mongoose to save the user and tasks data , security by hashing the password and saving the hashed value in the DB instead of using the actual password for security purposes ,
autherization using tokens by JWT and using this authentication as middleware for accessing certain pages in the website . 
 data filtering and pagination were used in the api . 
 sendgrid was used to send welcome and cancelling mail for the users 
..

as a user you can  read , create , delete , update info for the user .
and as an authenticated user . you can show tasks,delete , edit , search
and also user can upload profile picture.

# Testing 
tests were made using jest package.

# Prerequisites
Fisrt you need to have nodejs in your machine . 
then run cmd and write this command "npm install" to install all the dependencies inside the package file 

# Built With
NodeJS and JavaScript 

# Usage 
to run the project on localhost type this command "npm run start" as it will launch the project into the localhost 

