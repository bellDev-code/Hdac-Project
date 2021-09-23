const passport = require("../models/passport");
const mariaDB = require("../models/mariadb");

module.exports = {
  welcome: {},
  getAuthenticate: passport.authenticate("kakao"),
  authCallBack: passport.authenticate("kakao", {
    successRedirect: "/success",
    failureRedirect: "/fail",
  }),
  logout: (req, res) => {
    req.logout();
    req.session.destroy(function (err) {
      res.redirect("/");
    });
  },
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

  getQuery: async (req, res) => {
    try {
      const queryResult = await mariaDB.sendQuery(req.params.alias);
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

  postQuery: async (req, res) => {
    try {
      await mariaDB.sendQuery(req.params.alias);
      if (req.body.param.length > 0) {
        for (let key in req.body.param[0])
          req.session[key] = req.body.param[0][key];
        res.send(req.body.param[0]);
      } else {
        res.send({
          error: "Please try again or contact system manager.",
        });
      }
    } catch (err) {
      res.send({
        error: "DB access error",
      });
    }
  },
  welcome: () => {},
  getAuthenticate: () => {},
  authCallBack: () => {},
};
