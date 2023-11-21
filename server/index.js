const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const HttpError = require('./src/models/http-error');
const studentsRoutes = require('./src/routes/students-routes');
const classesRoutes = require('./src/routes/classes-routes');
const partiesRoutes = require('./src/routes/parties-routes');
const instructorsRoutes = require('./src/routes/instructors-routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS',
  );
  next();
});

app.use('/api/v1', studentsRoutes);
app.use('/api/v1', classesRoutes);
app.use('/api/v1', partiesRoutes);
app.use('/api/v1', instructorsRoutes);

app.use(() => {
  throw new HttpError('Could not find this route.', 404);
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
