const TodoModel = require("../model/todoSchema");

const TodoController = {
    getTodo: (request,response) => {
        TodoModel.find({}, (error , data) => {
            if(error){
                response.json({
                    message : `Internal Server Error ${error}`,
                    status : false,
                });
            } else     {
                response.json({
                    message : `Successfully Todo Get`,
                    status : true,
                    data : data
                });
            }
        });
    },
    postTodo :(request,response) => {
        const body = request.body;
        console.log(body);
    
        const objToSend = {
            todo : body.todo,
        }
        if(!body.todo){
            response.json({
                message : `Required Field are missing`,
                    status : false,
            });
            return
        }
        TodoModel.create(objToSend , (error , data) => {
            if(error){
                response.json({
                    message : `Internal Server Error ${error}`,
                    status : false,
                });
            }else{
                response.json({
                    message : `Successfully Todo Create`,
                    status : true,
                });
            }
        });
    
    },
    deleteTodo:(request,response) => {
        const { id }= request.params;
       //  console.log(id);
        TodoModel.findByIdAndDelete(id , ( error , data ) =>{
           if(error){
               response.json({
                   message : `Internal Server Error ${error}`,
                   status : false,
               });
           } else     {
               response.json({
                   message : `Successfully Todo Delete`,
                   status : true,
               });
           }
        });
   
   },
   updateTodo:(request,response) => {
    const body = request.body;
    console.log(body);

    const objToSend = {
        todo : body.todo,
    }
    if(!body.todo){
        response.json({
            message : `Required Field are missing`,
                status : false,
        });
        return;
    }
    TodoModel.findByIdAndUpdate(body.id , objToSend, (error , data) => {
        if(error){
            response.json({
                message : `Internal Server Error ${error}`,
                status : false,
            });
        }else{
            response.json({
                message : `Successfully Todo Update`,
                status : true,
            });
        }
    });

}
}
module.exports = TodoController;