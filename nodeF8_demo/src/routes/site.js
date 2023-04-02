const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.get('/search', siteController.searchShow);
router.get('/showdata', siteController.showData);
router.get('/', siteController.homeShow);

module.exports = router;