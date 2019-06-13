const express = require('express');
const connectDB = require('./config/db');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('config');
const app = express();

//Compress The files to optimize the setting
app.use(compression());

//Connect Database
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/posts'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Enforcing https
app.all('*', function(req, res, next) {
  console.log(
    'req start: ',
    req.secure,
    req.hostname,
    req.url,
    app.get('port')
  );
  if (req.secure) {
    return next();
  }
  res.redirect('https://' + req.hosthame + ':' + app.get('secPort') + req.url);
});

//Define Port & use 4000 if doesn't have one
const PORT = process.env.PORT || 4000;

//start server at the Port
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
