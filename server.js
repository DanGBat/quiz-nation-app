const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const quizUser = require('./models/user');
const quizResults = require('./models/results');
const bcrypt = require("bcryptjs");
const cookiePaser = require("cookie-parser");
const jwt = require('jsonwebtoken'); 
const auth = require('./middleware/auth');


// const QuizUser = require("./models/user");

// enable dotenv for accessing sensitive data file
// check files for .env file on the same directory level as server.js
dotenv.config({ path: './.env' });

// initialise express server
const app = express();

// if you want to pass data from forms to the front end, you need the following two lines
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookiePaser () ); 


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
    const hashedPassword = await bcrypt.hash(req.body.userPassword, 8);
    try {
        await quizUser.create({
            username: req.body.userName,
            email: req.body.userEmail,
            password: hashedPassword
        })
        res.json({
            message: "Thank you for registering with Quiz Nation",
            success: true
        })
    } catch (error) {
        res.json({
            message: "Sorry this email already exists"
        })
    }
    // const email: req.body.userEmail;
    // send a response to the front end console (browser) using the following
    // res.status(200).json({
    //     message: "User Registered"
    // // send data to the database from here for users that are rgistering
    // })
});

app.post('/quizSubmit', async (req, res) => {
    console.log(`the req.body.quizzerName from the backend is ${req.body.quizzerName}`);
    console.log(`the req.body.score from the backend is ${req.body.score}`);
    console.log(`the req.body.time from the backend is ${req.body.time}`);
    try {
        await quizResults.create({
            name: req.body.quizzerName,
            score: req.body.score,
            time: req.body.time
        })
        res.json({
            message: "Thank you for playing"
        })
    } catch (error) {
        res.json({
            message: "ERROR"
        })
    }
});



app.post ('/login', async(req, res) => {
    console.log(req.body)
    const user = await quizUser.find({ email: req.body.userEmail })
    console.log(user);
    //.length finds user in database 
    if(user.length > 0) {
        //if inputted password matches hashed password on database
        // const isMatch = await quizUser.compare(req.body.userPassword, quizUser[0].password)
        // console.log(isMatch);
        const token = jwt.sign( {id: user[0]._id}, process.env.JWT_SECRET, { 
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        console.log("my token");
        console.log(token);
        const cookieOptions = {
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true
        }
        res.cookie('jwt', token, cookieOptions); 
            res.status(200).json({
                // message: "you are logged in"
                success: true
           })
        

        //if match returns false
        // else
        //     res.json({
        //         message:"Sorry your email or password is wrong"
        //     })
        // }
     //if user isn't found- sends to font end
    }
    else {
        res.json({
            message:"Sorry your email or password is wrong"
        })
    }
})




app.post("/isAuth", auth.isLoggedIn, async (req, res) => {
    // console.log(req.user.username)
    // console.log(req.user.email)
    if(req.user) {
        res.json({
            auth: true,
            userName: req.user.username,
            userEmail: req.user.email
        })
    }
    else{
        res.json({
            auth: false
        })
    }
})






app.post("/logout", auth.logout, async(req, res) =>{
    res.json({
        logout: true
    })
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