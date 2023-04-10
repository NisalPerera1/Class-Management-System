const { string, integer } = require('check-types');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({

id: mongoose.Schema.Types.String,


    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
