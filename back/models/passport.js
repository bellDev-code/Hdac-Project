//const kakao = require("../models/어쩌구")
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

passport.initialize();
passport.session();

passport.use(new KakaoStrategy({
    clientID: '16fe234230416b76f219eef43b4488fb',// process.env.KAKAO_ID, // 내 앱의 REST API
    callbackURL: "/oauth/kakao/callback", // 카카오 디벨로퍼에 적어놓은 redirect uri와 같아야 한다
  }, 
  async(accessToken, refreshToken, profile, done) => { // 사용자가 유효한지 확인하는 verify 콜백함수 
    // accessToken과 refreshToken: 인증을 유지시켜주는 토큰
    // profile: 사용자 정보 객체
    // done(error, user): passport-twitter가 자체적으로 req.login와 serializeUser 호출하여 req.session에 사용자 아이디를 저장한다
    try{
      console.log(accessToken);
      console.log(profile);
      //save(accessToken, refreshToken, profile)
      return done(null,profile);
    }catch(err){
      return done(err)
    }
  })
);
passport.serializeUser(function(user, done) {
  console.log("red",user)
  done(null, user)
});
passport.deserializeUser(function(obj, done) {
  // passport로 로그인 처리 후 해당 정보를 session에 담는다. 
  //req.session.sid = user.name;
  //console.log("Session Check :" +req.session.sid);
  console.log("red",obj)
  done(null, obj); 
});

module.exports = passport;