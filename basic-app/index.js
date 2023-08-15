const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'server is running from docker container' });
});

app.listen(4000, () => {
  console.log('server is listening port number: 4000');
});
