const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ConnectToDataBase } = require('./Database/MongoDB');
const router = require('./Router/router');

const app = express();

// Connection
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001;

app.use(cors());  
app.use(express.json());
app.use("/api/user", router);
app.use(bodyParser.json());

ConnectToDataBase(MONGO_URL).then(()=>{ console.log("Database connected..!")})
app.listen(PORT, () => console.log(`Server is running on port localhost:${PORT}`))
