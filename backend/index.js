const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/project.routes');

const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors()); 

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error));

app.use('/api', projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
