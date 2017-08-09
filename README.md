# To-Do-List
To-Do List using AngularJS and Node.js

Each task is stored as an Object.Each object has a 'done' property, which indicates whether the task is completed or not.

server.js :
The requests are routed to their respective paths, the types of requests that are handled are :
1. Fetch existing To-do tasks from the database
2. Add new tasks 
3. Remove tasks which are completed

connectToDb.js :
Returns a pool of database connections

retrieve.js :
Fetches the tasks from the database and sends them as response

postTasks.js :
Receives new tasks as JSON, converts it to javascript object and then stores it in database

removeTask.js :
Receives a completed task as JSON, converts it to javascript object and removes the completed task from database