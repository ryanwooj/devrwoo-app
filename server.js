const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/posts'));

//Define Port & use 4000 if doesn't have one
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
