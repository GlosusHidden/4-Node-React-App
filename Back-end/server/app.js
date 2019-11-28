const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//Routes
const weather = require('./routes/weather');
const favourites = require('./routes/favourites');

const app = express()

app.use(cors())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server started on port ' + port)
})

app.use('/weather', weather);
app.use('/favourites', favourites);
