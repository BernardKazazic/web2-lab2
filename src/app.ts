import express from 'express';
import { auth } from 'express-openid-connect';
import { Auth0Config } from './config/auth0';
import homeRouter from './routes/homeRouter';
import xssRouter from './routes/xssRouter';
import brokenAccessRouter from './routes/brokenAccessRouter';


const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('css'));
app.use(auth(Auth0Config));

app.use('/', homeRouter);
app.use('/', xssRouter);
app.use('/', brokenAccessRouter);

app.listen(process.env.APPLICATION_PORT, () => {
    console.log('Server started on port 4000');
  });