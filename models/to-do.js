const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }


}, { timestamps: true })


const toDo = mongoose.model("Todo", toDoSchema)
module.exports = toDo;