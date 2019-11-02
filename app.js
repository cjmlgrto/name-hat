const config = require('./config.js')

function shuffled(x) {
    var a = x.map(y => y);
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
}

function assign(x, xz) {
    var y = []
    for (i = 0; i < x.length; i++) {
        y.push({
            id: x[i].id,
            name: x[i].name,
            assigneeID: xz[i].id,
            assigneeName: xz[i].name,
        })
    }
    return y
}

function draw() {
    var perfect = false
    
    const members = config.members
    var shuffledMembers = shuffled(members)
    var names = assign(members, shuffledMembers)

    while (!perfect) {
        perfect = true
        for (i = 0; i < names.length; i++) {
            if (names[i].id == names[i].assigneeID) {
                perfect = false
            }
        }
        if (!perfect) {
            shuffledMembers = shuffled(members)
            names = assign(members, shuffledMembers)
        }
    }

    return names
}

console.log(draw())