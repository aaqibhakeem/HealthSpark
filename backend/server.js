require('dotenv').config()
const recordRoutes = require('./routes/records')
const mongoose = require('mongoose')
const express = require('express')
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const app = express()
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const clients = {};

app.use(cors());

app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method);
    next()
})

app.use('/api/records', recordRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5000, () => {
            console.log("Connected to DB and Listening on port", 5000+"...")
        })
    })
    .catch((err) => {
        console.log(err);
    })

    app.get('/', (req, res) => {
        res.send('Hello world');
      });
      
      server.listen(4000, () => 'Server is running on port 4000');
      