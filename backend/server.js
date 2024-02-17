require('dotenv').config()
const recordRoutes = require('./routes/records')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method);
    next()
})

app.use('/api/records', recordRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB and Listening on port", process.env.PORT+"...")
        })
    })
    .catch((err) => {
        console.log(err);
    })