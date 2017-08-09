"use strict"

const express = require('express');
const router = express.Router();

const pool = require('./connectToDb')

router.get('/',(req,res,next) => {

    pool.connect(function onConnect(err,client,release){
        if(err){
            console.log(err)
            return
        }
       client.query('select * from todolist', function(err,results){
           release()
            if(err){
                console.log(err)
                client.end();
                return;
            }
            
            res.send(results.rows)
        })
    });
})

module.exports = router;