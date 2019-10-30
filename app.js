const app = require('express')();
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
