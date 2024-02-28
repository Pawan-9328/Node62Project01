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

//..merge id [ create only one id.....]
//called grouping
app.route('/api/users/:id').get((req, res) =>{{
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   return res.json(user);
}})
.put((req, res) => {
   //Edit user with id 
  return res.json({status: 'Pending'});
})

.delete((req, res) => {
  return res.json({status: 'Delete'});

})

// app.get("/api/users/:id", (req, res) => {
   
// });

app.post('/api/users/:id', (req, res) =>{
    //..TODO: Create new User 
    return res.json({status: "pending"});
})


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