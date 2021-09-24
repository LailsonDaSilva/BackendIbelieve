const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./database');

app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
 
// parse application/json
app.use(bodyParser.json())
app.use(express.json());
app.use(routes);
app.listen(3333);