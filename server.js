const express = require('express');
const app = express();
const retrieve = require('./retrieve')
const postTask = require('./postTasks')
const removeTask = require('./removeTask')

app.listen('8081', () => {
    console.log("Listening on port 8081");
})

app.get('/', retrieve)

// app.get('/' , function(req,res){
//     res.sendFile(__dirname + '/home.html')
// })
app.post('/',postTask)

app.use('/remove', removeTask)
