const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bugRoutes = require('./routes/bugRoutes');
const { TopologyDescriptionChangedEvent } = require('mongodb');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/bugs', bugRoutes);


mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log(' MongoDB Connected'))
  .catch(err => console.log(' MongoDB Error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});


