const express = require('express')
const app = express();

const { getTopics } = require('./controllers/controllers.js')

app.get('/api/topics', getTopics)

module.exports = app;