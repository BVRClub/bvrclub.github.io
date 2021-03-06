const express = require('express')
const app = express();

const path = require('path');


app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('BVR  app listening on port 3000!')
})

