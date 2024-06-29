const mongoose = require("mongoose");

// connect to mongodb

mongoose.connect("mongodb+srv://namantheadmin:peHG59ikmtdX0q56@cluster0.fm8s0.mongodb.net/todo_db");

// create schema

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
});

const todo = mongoose.model("Todos", todoSchema);

module.exports = {
    todo
}