const Studentdb = require("../models/studentModel");

//create and save a new user
const createStudent = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  //new student
  const student = new Studentdb({
    name: req.body.name,
    rollNo: req.body.rollNo,
    className: req.body.className,
    result: req.body.result,
  });

  //save student in db
  student
    .save(student)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating student",
      });
    });
};

//retrieve and return all / retrieve and return single user
const retrieveStudent = (req, res) => {};

//update a student with id
const updateStudent = () => {};

//delete a student with id
const deleteStudent = () => {};

module.exports = {
  createStudent,
  retrieveStudent,
  updateStudent,
  deleteStudent,
};
