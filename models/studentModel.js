const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  className: String,
  result: {
    physics: String,
    chemistry: String,
    maths: String,
  },
});

module.exports = mongoose.model("StudentDB", StudentSchema);
