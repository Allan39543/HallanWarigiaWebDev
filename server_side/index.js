require("dotenv").config();
const express=require('express')
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const bodyParser=require('body-parser')
const EventRoute=require('./src/routes/events.route')
const UsersRoute=require('./src/routes/users.route')
const path = require('path');
const AttendEvent=require('./src/routes/users.attending.events.route')
const authRoute=require("./src/routes/auth.route")
const { connectDatabase } = require('./db.connection');
const cron = require('node-cron');


const app=express()

app.set("trust proxy", 1);

app.use(bodyParser.urlencoded({extended: false }))

app.use(bodyParser.json())

app.use(
	cookieSession({
	  name: "session",
	  keys: ["alumniapp"],
	  maxAge: 365 * 24 * 60 * 60 * 1000, 
	})
  );
  

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: [process.env.CLIENTT_URL],
		methods:  ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);


app.use("/auth", authRoute)
app.use("/api",EventRoute)
app.use("/api",UsersRoute)
app.use("/api",AttendEvent)




const PORT=process.env.PORT||5000

app.get('/',(req,res)=>{
    res.send('<h2>Assignment</h2>')
})

app.get('/pingserver', (req, res) => {
    res.status(200).send('<h2>OK</h2>');
})
connectDatabase()



app.listen(PORT,()=>{

    console.log(`The server is listening at port ${PORT}`);
})

