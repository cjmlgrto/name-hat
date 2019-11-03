class Hat {
    constructor(members) {
        this.size = members.length;
        this.members = members.map(member => member);
    }

    shuffle() {
        for (let i = this.members.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.members[i], this.members[j]] = [this.members[j], this.members[i]];
        }
    }

    draw() {
        return this.members.pop()
    }
}

module.exports = Hat
