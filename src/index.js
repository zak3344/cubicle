const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const { dbConnect } = require('./config/dbconnect');
const app = require('express')();

const router = require('./router');

require('./config/express')(app);

app.use(router);

dbConnect(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(
            config.PORT,
            console.log(`Listening on http://localhost:${config.PORT}`)
        );
    })
    .catch((error) => {
        console.log(error);
    }
);