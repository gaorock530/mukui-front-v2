const express = require('express');
const app = express();


app.set('x-powered-by', false);
app.use(express.static(__dirname + '/build'));


app.listen(3000, (e) => {
  console.log(e || 'Server is running on port 3000.');
})