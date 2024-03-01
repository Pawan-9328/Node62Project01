const express = require("express");
const {connectMongoDb} = require('./connection');
const {logReqRes} = require('./middlewares/index');

const userRouter = require('./routes/user');
//...name dene ki need nhi h bcz inde file automatically vo le lta h..
//const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

//connection
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(() => console.log('Mongodb connected! '));



//...Middleware - plugin....
//front value convert in object and sent that value in req.body 
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));

//.....this middleware hold request....




// app.use((req, res, next ) =>{
// console.log('Hello from middleware  1');

// });


//  in first fun code .. without next middleware fun ko return krna but if using next means access to a head... 

// second fun code
// app.use((req, res, next) => {
   
//    // console.log('Hello from middlware 1');
//    //req.myUserName = 'keshav.dev';

//    //return res.json({mgs: 'Hello from middlware 1'});
// });

//Routes..
app.use('/api/users', userRouter);



app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`)
);