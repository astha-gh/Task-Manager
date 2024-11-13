const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();

//middleware
app.use(express.json());

app.get('/' , (req , res) => {
    res.send("Task Manager App");
});

app.use('/api/v1/tasks' , tasks);


const port = 3002;
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("Connected to MongoDB Atlas");
        app.listen(port , () => {
            console.log(`Listening on port ${port}`);
        }) 
    }
    catch(err){
        console.log(err);
    } 
}
 
start();