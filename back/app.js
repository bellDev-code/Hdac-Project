const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");

const route = require("./routes/route");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use(
  session({
    secret: "secret12#$",
    cookie: { maxAge: 60 * 60 * 1000 }, // 60초 * 60분 * 1000밀리세컨
    resave: true,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.set("PORT", 3000);

app.use(route);

app.listen(app.get("PORT"), () => {
  console.log(`listening to ${3000}`);
});
