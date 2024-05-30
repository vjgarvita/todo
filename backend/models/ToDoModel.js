const mongoose=require("mongoose");

const todoScema =new mongoose.Schema({
    toDo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

module.exports =mongoose.model("ToDo",todoScema); 