const express = require("express");
const { handleGetAlUsers, handleGetUserById, handleUpdateUserById,handleDeleteUserById, handleCreateNewUser } = require('../controllers/user');

const router = express.Router();

router.route("/").get(handleGetAlUsers).post(handleCreateNewUser);

// router.get('/users',async (req, res) => {


//    const allDbUsers = await User.find({});
//    const html = `
//     <ul>
//     ${allDbUsers.map((user) => `<li> ${user.firstName}</li>`).join(" ")}
//     </ul>
//     `;

//    res.send(html);
// });

//...REST API...



//..merge id [ create only one id]..
//called grouping
router
.route('/:id')
   .get(handleGetUserById)
   .patch(handleUpdateUserById)
   .delete(handleDeleteUserById)


// app.get("/api/users/:id", (req, res) => {

// });

   // users.push({ ...body, id: users.length + 1 });
   // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
   //    return res.status(201).json({ status: "success", id: users.length });
   // });

// app.patch('/api/users/:id', (req, res) =>{
//    //..TODO: CEdit the user with id 
//    return res.json({status: "pending"});
// });

// app.delete('/api/users/:id', (req, res) =>{
//    //..TODO: Credit the user with id 
//    return res.json({status: "pending"});
// });


module.exports = router;
