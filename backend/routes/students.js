const router = require('express').Router();
const Student = require('../models/studentmodel');
const mongoose = require('mongoose');

// Add a new student
router.post('/add', async (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const age = req.body.age;
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    address,
    age,
    gender
  });

  try {
    await newStudent.save();
    return res.status(200).json({
      success: 'Student saved successfully'
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find(req.query);
    res.send(students);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// Get a single student by id
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a student
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'address', 'gender', 'age'];
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update));

  const studentId = req.params.id;

  if (!isValidUpdate) {
    return res.status(400).send({ error: 'Invalid updates' });
  }

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).send('Student not found');
    }

    updates.forEach(update => {
      student[update] = req.body[update];
    });

    await student.save();

    res.send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
