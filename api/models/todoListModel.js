const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a model of how the collection should look like
const TaskSchema = new Schema({
    name: {
        type: String, required: "Kindly enter a name of the task."
    },
    created_date: {
        type: Date, default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);