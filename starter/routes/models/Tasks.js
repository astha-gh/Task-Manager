const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const TaskSchema = new moongoose.Schema({
    name : String,
    completed : Boolean
})

module.exports = mongoose.model('Task' , TaskSchema);