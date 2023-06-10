const express = require('express');

const app = express();

app.get('/health', (req, res) => res.json({
  uptime: process.uptime(),
  timestamp: Date.now(),
}));

app.listen(8000);