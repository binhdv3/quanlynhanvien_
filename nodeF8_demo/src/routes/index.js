const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const adminRouter = require('./admin');

function route(app) {
    // app.get("/", function (req, res) {
    //     res.render('home');
    // });
    app.use('/', siteRouter);
    app.use('/news' , newsRouter);
    app.use('/course' , courseRouter);
    app.use('/admin', adminRouter);
    // app.use('/search', siteRouter);
  
   
}

module.exports = route;