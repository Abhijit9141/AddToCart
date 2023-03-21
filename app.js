const express = require("express");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const cartRouter = require("./routers/cartRouter");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./Controller/errorController");
const app = express();
app.use(express.json());

app.use("/v1",userRouter);
app.use("/v1",productRouter);
app.use("/v1",cartRouter);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app; 