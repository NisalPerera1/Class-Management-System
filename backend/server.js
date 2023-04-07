const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8070;

const studentRouter = require('./routes/students');
const paperRouter = require('./routes/papers');

const URL = 'mongodb+srv://NisalPerera2:Nisal12345@stumansys.bwxtcl1.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose.connect(URL).then(() => {
  console.log('Db Connected Successfully');
}).catch((err) => {
  console.log('Sorry Db is not Connected!!!', err);
});

// App middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/students', studentRouter);
app.use('/papers', paperRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
