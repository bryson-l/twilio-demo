const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')('AC1a962a204532e355a208bf9105f1d396', 'caf153f98cf13a7a2779ac3be09e1db4');
var num = 0
num++

client.chat.services('IS6c164dd051eb40b9a62cec4e67ec98bc')
           .channels('CH5c49b1a658dc4e21aea12bd9e9c9a218')
           .messages
           .create({'body': 'test message from node'})
           .then(message => console.log(message.sid))