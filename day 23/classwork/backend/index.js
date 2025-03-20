// http core module express.js syntax is easier than http module
const express = require('express'); // inside requre is the name of the module
const userRouter = require('./routes/user.routes');
const app = express(); // app is an object of express

app.use(express.json()); //middleware

app.get("/", function(req, res){ //here have two anonymous function one is request and another is response
    res.status(200).send("<h1>Welcome to SVU backend server</h1>");
});

app.use(userRouter);

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});