const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch
    ((err) => {
      res.json(err);
    });
  const posts = postData.map((post) =>
    post.get({ plain: true }));
  res.render('homepage', { posts });
});


router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
