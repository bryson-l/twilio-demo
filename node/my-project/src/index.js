import 'dotenv/config'
import cors from 'cors'
import express from 'express';

const app = express();
var twilio = require('twilio');
const client = require('twilio')('AC1a962a204532e355a208bf9105f1d396', 'caf153f98cf13a7a2779ac3be09e1db4');

app.use(cors());

app.get('/', (req, res) => {
    var responseObj = {test: 'test'}
    res.send(responseObj)
});

app.post('/sendMessage', (req, res) => {
  client.chat.services('IS6c164dd051eb40b9a62cec4e67ec98bc')
           .channels('CH5c49b1a658dc4e21aea12bd9e9c9a218')
           .messages
           .create({'body': req.body.entry[0].messaging[0]})
           .then(message => console.log(message.sid))
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
