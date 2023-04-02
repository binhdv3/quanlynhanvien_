const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {

    //[GET] /product/slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course) 
                res.render('course/show', { course: mongooseToObject(course) })
            })
            .catch(next)
        // res.send('product - ' + req.params.slug);
    }

    //[GET] /product/create
    create(req, res, next) {
        res.render('course/create')
    }

    //[POST] /product/create
    store(req, res, next) {
        // res.json(req.body)
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/showData'))
            .catch(next)
    }

    //[GET] /courses/edit/id
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('course/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)

    }

    //[PUT] /course/:id
    update(req, res, next) {
        // res.json(req.body)
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/stored/courses'))
            .catch(next)
    }

    // [DELETE] /course/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController;