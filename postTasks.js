"use strict"

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//To add 'body' property to request object
router.use(bodyParser.urlencoded({extended : true}));

const pool = require('./connectToDb')

router.use('/',(req,res) => {
    console.log("In post")
    updateTable(req,res);
})

function updateTable(req,res) {

    console.log(req.body);
    const key = Object.keys(req.body);
    let obj = JSON.parse(key);
    pool.connect(function onConnect(err,client,release){
        if(err){
            console.log(err)
            return
        }

            client.query('insert into todolist values($1,$2)',[obj.toDo, obj.done] , function(err,results){
                if(err){
                    console.log(err)
                    release()
                    client.end();
                    return;
                }
            
             })

        release();
        res.end("Added");
    });
}

module.exports = router;