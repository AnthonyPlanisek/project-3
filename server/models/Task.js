const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
    },
    taskPoint: {
        type: Number,
        required: true,
    },
    taskDescription: {
        type: String,
        required: true,
    },
    taskDate: {
        type: Date,
        required: true,
    }

});

const Task = model('Task', taskSchema);

module.exports = Task;