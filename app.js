const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const mobile = process.env.TWILIO_MOBILE

const members = require('./src/members.js');
const client = require('twilio')(accountSid, authToken);
const Hat = require('./src/hat.js');

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
    tokens.map(token => {
        client.messages.create({
            body: `Hello ${token.from.name}, you will be buying a gift for: ${token.to.name}. View the family wishlist here: http://fam.my-wishes.me`,
            from: mobile,
            to: token.from.mobile
        }).then(message => console.log(`SENT: ${message.sid} TO: ${token.from.mobile}`));
    });
}

function app() {
    let tokens = assign(members);
    while (!hasUniquePairs(tokens)) {
        tokens = assign(members);
    }
    send(tokens);
}

app();
