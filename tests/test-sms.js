const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const mobile = process.env.TWILIO_MOBILE

const testNumber = process.env.TEST_NUMBER

const client = require('twilio')(accountSid, authToken);

function testSMS() {
    client.messages.create({
        body: `Hello Person A, your Kris Kringle is: Person B`,
        from: mobile,
        to: testNumber
    }).then(message => console.log(`SENT: ${message.sid} TO: ${testNumber}`));
}

testSMS();