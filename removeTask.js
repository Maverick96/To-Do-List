"use strict"

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//To add 'body' property to request object
router.use(bodyParser.urlencoded({extended : true}));

const pool = require('./connectToDb')

router.post('/', (req,res) => {
    console.log("In post of remove")
    removeFromTable(req,res);
})

function removeFromTable(req,res){

    const input = req.body;

    const key = Object.keys(input);
    //The taskObject is stored as JSON string, so parse it
    //let obj = JSON.parse(key);
    console.log(key)
    let obj = JSON.parse(key[0])
    console.log(obj.toDo)
    
    pool.connect(function onConnect(err,client,release){
        if(err){
            console.log(err)
            return
        }

            client.query('delete from todolist where todo=($1)', [obj.toDo] , function(err,results){
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

    res.end();
}
module.exports = router;