const Hat = require('./src/Hat.js');
const Members = require('./src/Members.js');

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
    console.log(tokens);
}

function run() {
    let tokens = assign(Members);
    while (!hasUniquePairs(tokens)) {
        tokens = assign(Members);
    }
    send(tokens);
}

run();