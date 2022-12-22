

const express = require("express");
const cors = require("cors");

const app = express();

const port = 8081;

app.use(express.json());
app.use(cors());

app.use(
    express.urlencoded({
      extended: true,
    })
);

const userRouter = require("./routes/user");
const businessUserRouter = require('./routes/businessUser')

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use('/user', userRouter);
app.use('/businessUser', businessUserRouter)

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
