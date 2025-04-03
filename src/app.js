const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const routerApi = require('./routes');

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/health', (req,res) => {
    res.send('ok');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});