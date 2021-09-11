import express from 'express';
import passport from 'passport'
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import * as http from 'http';
import { db } from './database/database.js';
import './middleware/auth/passport.middleware.js';
import routes from './routes/index.js'

dotenv.config();

db.setURI(process.env.MONGODB_URI)
db.connect()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.use('/', routes);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

const port = process.env.PORT || 8000;
export const server = http.createServer(app).listen((port), (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Welcome Book is running && listen port ${port}`);
})
