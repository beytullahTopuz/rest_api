const express = require('express');
const app = express();

require('./db/db_connection');

const userRouter = require('./routers/user_router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.json({
        message: "welcome music's rest api",
    });
});

app.use('/user',userRouter);

app.listen(3000);