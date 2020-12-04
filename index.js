'use strict';

const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('Hello world! 🎉');
});

app.listen(3000, () => {
  console.log('🚀 Server is listening on port 3000');
});
