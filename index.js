//...Rest Api First Project - 01...
const express = require("express");
const fs = require('fs');
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

//...Middleware - plugin....
//front value convert in object and sent that value in req.body 
app.use(express.urlencoded({ extended: false }));
  
//.....this middleware hold request....
// app.use((req, res, next ) =>{
// console.log('Hello from middleware  1');

// });


//  in first fun code .. without next middleware fun ko return krna but if using next means access to a head... 

// second fun code
app.use((req, res, next) =>{
 fs.appendFile('log.txt',
  `${Date.now()}: ${req.method}: ${req.path} \n`,
   (err, data) =>{
   next();
 }
  );
   // console.log('Hello from middlware 1');
    //req.myUserName = 'keshav.dev';
    
    //return res.json({mgs: 'Hello from middlware 1'});
});


  
 
//..Routes
app.get('/users', (req, res) => {
   const html = `
    <ul>
    ${users.map(user => `<li> ${user.first_name}  </li>`)}
   `;
   res.send(html);
});

//...REST API...
app.get('/api/users', (req, res) => {
   //console.log('I am in get route. ', req.myUserName);
   return res.json(users);
});

//..merge id [ create only one id]..
//called grouping

app.route('/api/users/:id').get((req, res) => {
   {
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      return res.json(user);
   }
})

   .put((req, res) => {
      //Edit user with id 
      return res.json({ status: 'Pending' });
   })

   .delete((req, res) => {
      return res.json({ status: 'Delete' });

   })

// app.get("/api/users/:id", (req, res) => {

// });

app.post('/api/users', (req, res) => {
   const body = req.body;
   if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title  ) {
      return res.status(400).json({msg : "All fields are req..."});
   }
   users.push({...body, id: users.length + 1});
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.status(201).json({ status: "success", id: users.length});
   });


});


// app.patch('/api/users/:id', (req, res) =>{
//    //..TODO: CEdit the user with id 
//    return res.json({status: "pending"});
// });

// app.delete('/api/users/:id', (req, res) =>{
//    //..TODO: CEdit the user with id 
//    return res.json({status: "pending"});
// });


app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`)
);