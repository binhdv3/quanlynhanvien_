const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /home
    homeShow(req, res, next) {
        res.render('home')
    }

    showData(req, res, next) {
        Course.find({}).
            then(courses => {
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
    //[GET] /search
    searchShow(req, res) {
        console.log(req.query);
        res.render('search');
    }
}

module.exports = new SiteController;