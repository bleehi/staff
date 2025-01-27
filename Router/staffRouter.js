const { Router } = require('express');
const { createStaff } = require('../controller/staffController');

const studentRouter = require('express').Router();

studentRouter.post('/staff', createStaff);
studentRouter.get('/staff', createStaff);

module.exports = staffRouter