const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    isCompleted: zod.boolean()
});

const updateTodo = zod.object({
    id: zod.string()
});

module.exports = {
    createTodo,
    updateTodo
}

/* {
    {
        title: String,
        description: String,
        isCompleted: Boolean
    }

    {

    }

    {
        id: String
    }
 }
*/
