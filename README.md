# To-Do-List
To-Do List using AngularJS and Node.js

## server.js :

The requests are routed to their respective paths, the types of requests that are handled are :
* Fetch existing To-do tasks from the database
* Add new tasks 
* Remove tasks which are completed

## connectToDb.js :
Returns a pool of database connections

## retrieve.js :
Fetches the tasks from the database and sends them as response

## postTasks.js :
Receives new tasks as JSON, converts it to javascript object and then stores it in database

## removeTask.js :
Receives a completed task as JSON, converts it to javascript object and removes the completed task from database
