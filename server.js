const express = require('express');
const cors = require("cors");
const connectDB = require('./db');
const app = express();
app.use(cors())

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const router = require('./routes')
app.use('/', router)
