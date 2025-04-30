const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  rollnum: { required: true, type: String },
  age: { required: true, type: Number },
  gender: { required: true, type: String },
  password: { required: true, type: String },
});

module.exports = mongoose.model("student", studentSchema);
