const express = require("express");
const bodyParser = require("body-parser");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(bodyParser.json());

app.get("/todo", async(req, res) => {
    try {
        const allTodos = await todo.find({});
        if(!allTodos){
            throw new Error("Todos not found.");
        }

        return res.json({todos: allTodos});
    } catch (err) {
        return res.status(404).json({msg: err.message});
    }
});

app.post("/todo", async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success) {
        res.status(411).json({msg: "wrong data provided"});
    }

    try {
        const newTodo = await todo.create({
            title: req.body.title,
            description: req.body.description,
            isCompleted: false
        });

        if(!newTodo._id) throw new Error("Some error in creating todo :(");

        return res.json({msg: "New todo created :)"});
    } catch (error) {
        return res.json({msg: error.message});
    }
});

app.put("/completed", async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload) {
        return res.status(411).json({msg: "wrong data provided"});
    }

    const { todoId } = req.body;
    try {
        const updatedTodo = await todo.updateOne({_id: todoId}, {
            $set: {
                isCompleted: true
            }
        });
        
        return res.json({msg: "Todo updated."});
    } catch (err) {
        return res.json({msg: "Todo not updated."});
    }
});




app.listen(3000, () => {
    console.log("server is running at port 3000");
})