const Person = require('./person')
class Crew extends Person {
    constructor(name, bags, position, staffNumber) {
        super (name, bags)
       
        this.position = position
        this.staffNumber = staffNumber
    };
};
module.exports = Crew