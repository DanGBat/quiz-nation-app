const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require('./models/user')

// enable dotenv for accessing sensitive data file
// check files for .env file on the same directory level as server.js
dotenv.config({ path: './.env' });

// initialise express server
const app = express();

// if you want to pass data from forms to the front end, you need the following two lines
app.use(express.urlencoded());
app.use(express.json());


//the object of booleans passed in is to remove errors
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
// quick console log to show it's connected
.then(() => console.log("MongoDB is connected"));

// create routes with GET method - HOME
app.get("/", (req, res) => {
    res.send("Hello from Node.js");
});


// setup my own API - res.status is HTTP code check (200 = OK, 404 not etc...)
// app.get("/myApi", (req, res) => {
//     res.status(200).json({
//         Team1: "Manchester United",
//         Score: "1-6",
//         Team2: "Spurs"
//     })
// })

app.post('/register', async(req, res) => {
    console.log(req.body);
    try {
        await User.create({
            username: req.body.userName,
            email: req.body.userEmail,
            password: req.body.userPassword
        })
        res.json({
            message: "user is registerd"
        })
    } catch (error) {
        res.json({
            message: "email taken"
        })
    }
    // const email: req.body.userEmail;
    // send a response to the front end console (browser) using the following
    // res.status(200).json({
    //     message: "User Registered"
    // // send data to the database from here for users that are rgistering
    // })
})

//example function to access database
// app.get("/getAllUsers", async (req, res) => {
//     //grabs all users from Schema and stores them in const users
//     // const users = await User.find();

//     res.status(200).json({
//         // allDatabaseUsers: users;
//         allDatabaseUsers: {
//             user1: "John",
//             user2: "Peter"
//         }
//     })
// });

//setup port on local server with a callback function that console logs it's running
//Port number is now located in .env and held in 'PORT' variable so it's hidden.
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });