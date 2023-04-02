const express = require('express')
const router = express.Router();

const coursesController = require('../app/controllers/CourseController');
router.get('/create', coursesController.create);//create
router.post('/store', coursesController.store);
router.get('/edit/:id', coursesController.edit );// edit -> update
router.put('/:id', coursesController.update);//update
router.delete('/:id', coursesController.delete);//delete
router.get('/:slug', coursesController.show);

module.exports = router;