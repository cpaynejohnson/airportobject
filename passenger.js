class Passenger  {
    constructor (docType, ticketClass) {
        this.docType = docType
        this.ticketClass = ticketClass
        this.bags = []
    }
    addbags(bag){
        this.bags.push(bag)
    }
}   
module.exports = Passenger