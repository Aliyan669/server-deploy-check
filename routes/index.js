const TodoModel = require("../model/todoSchema");

var express = require('express');
const TodoController = require('../controlleres/todo');
var router = express.Router();

router.get("/api/test" , (request, response)=>{
    response.send("test")
}) 

// router.get("/api/fakeproduct", (request, response) => {

//     response.json({
//         message: "Successfully get",
//         status: true,
//         product : [{
//             name : "keyboard"
//         },
//         {
//             name : "Cpu"
//         },
//         {
//             name : "Mouse"
//         },
//     ]
//       });
// });

router.post("/api/todo" , TodoController.postTodo);

router.get("/api/todo" , TodoController.getTodo);

router.delete("/api/todo/:id" , TodoController.deleteTodo); 

router.put("/api/todo" , TodoController.updateTodo);


module.exports = router ;