const express = require('express');
const router = express.Router();

// meta info
const siteMeta = {
  siteTitle: 'Safer Insurance',
  siteUrl: 'SITEURL',
  siteDescription: 'DESCRIPTION',
  siteKeywords: 'KEYWORDS',
  siteImageUrl: 'SITEIMAGEURL',
  welcomePageUrl: 'WELCOMEPAGEURL',
  googlePlusId: 'GOOLGEPLUSID'
};

// route middleware
router.use(function(req, res, next) {
  next();
});

// index serve
router.route('/')
  .get(function(req, res){
    res.render('../views/pages/index/index.ejs', siteMeta);
  });

// 404 serve
router.use(function(req, res, next){
  res.status(404);
  // respond with html
  if (req.accepts('html')) {
    res.render('../views/pages/404/404.ejs', {
      title: siteMeta.siteTitle + '404',
      url: req.url
    });
    return;
  }
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  // fallback with plain text
  res.type('txt').send('Not found');
});

// export router
module.exports = router;