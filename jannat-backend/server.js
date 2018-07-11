const express = require('express');

const OTPService = require('./service/OTPService.js');//


//Make new express app
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req, res) => {

    //send html data back
    //res.send("<h1>Hello jannat...</h1>  ");

    //send json data back
    res.send({

        name:'Amjad',
        address:'Pune'
    });

});

app.get('/login',(req, res) => {

    //send html data back
    res.send("<h1>Login..</h1>  ");
});

app.get('/getOTP',(req, res) => {

    OTPService.getOTP();
});

app.listen(2300,() => {

    console.log("Running at port 2300");
});