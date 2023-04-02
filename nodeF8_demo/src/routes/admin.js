const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController')

router.get('/stored/courses', adminController.storedCourses)

module.exports = router;