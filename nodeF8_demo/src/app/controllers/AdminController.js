const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {

    //[GET] admin/stored-courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('admin/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }

}

module.exports = new AdminController;