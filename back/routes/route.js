const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/oauth/kakao', controller.getAuthenticate);
router.get('/oauth/kakao/callback', controller.authCallBack);
router.get('/oauth/kakao/logout', controller.logout);

router.get('/success', controller.success);
router.get('/fail', controller.fail);

router.get('/f1', controller.f1);
router.get('/f2', controller.f2);


router.get('/api/:alias', controller.getQuery);
router.post('/api/:alias', controller.postQuery);


module.exports = router;