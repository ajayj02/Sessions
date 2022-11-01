//jshint esversion: 6

const express = require("express");
const request = require("request");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //for CSS


app.get('/', (req,res) => {
    res.sendFile(__dirname + "/signup.html");
});


app.post('/', (req,res) => {
     
   const firstName =req.body.fname;
   const lastName =req.body.lname;
   const email = req.body.email;

   const data = {
    members: [
        {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName

            }
        }
    ]
   };
   const jsonData = JSON.stringify(data);

})

app.listen(3000, () => {
    console.log("the server started at 3000");
})


// bc342ee1c274a43b115a247497c3839e-us11  API-key

// f1a93d6aeb unique id
