const Hat = require('./src/Hat.js');
const Members = require('./src/Members.js');

const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACC_SID;
const authToken = process.env.TWILIO_AUT_TOK;
const mobileNumber = process.env.TWILIO_MOB_NUM;
const testNumber = process.env.TEST_NUM;
const client = require('twilio')(accountSid, authToken);

function assign(members) {
    let tokens = [];
    let hat = new Hat(members);
    hat.shuffle();
    for (let i = 0; i < hat.size; i++) {
        tokens.push({
            from: members[i],
            to: hat.draw()
        });
    }
    return tokens
}

function hasUniquePairs(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].from.ID == tokens[i].to.ID) {
            return false
        }
    }
    return true
}

function send(tokens) {
    client.messages.create({
        body: 'New phone who dis',
        from : mobileNumber,
        to: testNumber,
    }).then(message => console.log(message));
}

function run() {
    let tokens = assign(Members);
    while (!hasUniquePairs(tokens)) {
        tokens = assign(Members);
    }
    send(tokens);
}

run();