//...Rest Api First Project - 01...
const express = require("express");
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

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
   return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   return res.json(user);
});

app.post('/api/users', (req, res) =>{
    //..TODO: Create new User 
    return res.json({status: "pending"});
});

app.patch('/api/users', (req, res) =>{
   //..TODO: CEdit the user with id 
   return res.json({status: "pending"});
});

app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`)
);