const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/', controller.welcome);

router.get('/oauth/kakao', controller.getAuthenticate);
router.get('/oauth/kakao/callback', controller.authCallBack);
router.get('/oauth/kakao/logout', controller.logout);

router.get('/success', controller.success);
router.get('/fail', controller.fail);

router.get('/whoami', controller.whoami);

router.get('/api/:alias', controller.getQuery);
router.post('/api/:alias', controller.postQuery);


module.exports = router;