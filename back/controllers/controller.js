const passport = require("../models/passport");
const mariaDB = require("../models/mariadb");
const redis = require("../models/redis");

module.exports = {

  success: (req, res) => {
    res.send("success");
  },

  fail: (req, res) => {
    res.send("fail");
  },

  whoami: (req, res) => {
    if (!req.user) res.send("No Authentication");
    res.send(req.user);
  },

  marketOrder: (req, res) => {
    console.log(req.body);

    redis(
      req.body.nftID,
      req.body.orderType,
      req.body.orderer,
      req.body.amount,
      req.body.volume);

    res.send(req.header('Referer'));
  },
  postQuery: async (req, res) => {
    try {
      console.log(req.body);
      const queryResult = await mariaDB.sendQuery(req.params.alias, req.body.param, req.body.where);
      res.send(JSON.stringify(queryResult));
    } catch (err) {
      res.status(500).send({
        error: err,
        queryName: req.params.alias,
        bodyParams: req.body.param,
        where: req.body.where,
      });
    }
  },

  // postQuery: async (req, res) => {
  //   try {
  //     await mariaDB.sendQuery(req.params.alias);
  //     if (req.body.param.length > 0) {
  //       for (let key in req.body.param[0])
  //         req.session[key] = req.body.param[0][key];
  //       res.send(req.body.param[0]);
  //     } else {
  //       res.send({
  //         error: "Please try again or contact system manager.",
  //       });
  //     }
  //   } catch (err) {
  //     res.send({
  //       error: "DB access error",
  //     });
  //   }
  // },

  welcome: (req, res) => {
    res.send("test");
  },

  getAuthenticate: passport.authenticate("kakao"),

  authCallBack: passport.authenticate("kakao", {
    successRedirect: "http://127.0.0.1:3080/",
    failureRedirect: "http://127.0.0.1/fail",
  }),

  register: async (req, res) => {
    var log = await mariaDB.sendQuery('signUp', [req.body.id, req.body.passwd]);
    res.send(log);
  },

  locallogin: async (req, res) => {
    var log = await mariaDB.sendQuery('getUserAccount', [req.body.id, req.body.passwd]);
    res.send(log);
  },

  login: async (req, res) => {
    var log = await mariaDB.sendQuery('getUserAccount', [req.body.id, req.body.passwd]);
    res.send(log);
  },

  logout: (req, res) => {
    req.logout();
    req.session.destroy(function (err) {
      res.redirect("/");
    });
  },
};