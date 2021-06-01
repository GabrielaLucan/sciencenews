import express from 'express';
import initExpress from './config/express.js';
import initMongoose from './config/mongoose.js';
import initErrorHandling from './config/errorHandling.js';
import { dirname } from 'path';
import dotenv from 'dotenv';
dotenv.config();

const { PORT, ENV, MONGO_URL } = process.env;

const app = express();
app.set('root', dirname);

initExpress(app);
initMongoose(MONGO_URL);
initErrorHandling(app);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`App is running on port ${PORT}  in ${ENV} mode`);
});
