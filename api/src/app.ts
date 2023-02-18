const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const setHeaders = require("./utils/middlewares/setHeaders").default;
const errorHandler = require("./utils/middlewares/errorHandler").default;


const app = express();
// app.name = "API";

//Middlewares
app.use(cookieParser());
app.use (express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(setHeaders);
app.use('/', routes);
app.use(errorHandler)

export default app;