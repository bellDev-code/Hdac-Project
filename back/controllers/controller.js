const passport = require('../models/passport');

module.exports = {
    getAuthenticate: passport.authenticate('kakao'),
    authCallBack : passport.authenticate('kakao', 
        {
            successRedirect: '/success',
            failureRedirect : '/fail',
        }
    ),
    logout: (req, res) => {
        req.logout();
        req.session.destroy(function(err){
            res.redirect('/');
        })
    },
    success : (req, res) => { res.send("success") },
    fail : (req, res) => { res.send("fail") },
    f1 : (req, res) => { 
        // req 의 user는 passport에서 인젝션해줘서 생기는 객체, 예약어
        console.log(req.user,2)
        res.send("f1") 
    },
    f2 : (req, res) => { 
        console.log(req.user,3)
        res.send("f2") 
    },
}