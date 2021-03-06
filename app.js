var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var indexRouter = require("./routes/index");
var loaderRouter = require("./routes/loader");
var frontendRouter = require("./routes/dataFrontend");
var mockServerRouter = require("./routes/mockDataServer");
var dotenv = require("dotenv");
var app = express();
var cors = require("cors");
const usersRouter = require("./routes/users");

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({origin: "*"}))

app.use("/", indexRouter);
app.use("/api/loader", loaderRouter);
app.use("/api/fedata", frontendRouter);
app.use("/api/mockdata", mockServerRouter);
app.use("/api/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.listen(process.env.PORT, () => {
//   console.log("Server express ejecuntandose en el puerto:$", { process });
// });

module.exports = app;
