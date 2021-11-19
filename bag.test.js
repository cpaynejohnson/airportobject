const Bag = require("./bag");

describe('Bag class', () => {
    
    test('bag has a valid weight', () => {
        const testBag = new Bag(0.01)
        expect(testBag.valid_weight()).toBe(true)
        const testBag2 = new Bag(45)
        expect(testBag2.valid_weight()).toBe(true)
        const testBag3 = new Bag(75)
        expect(testBag3.valid_weight()).toBe(false)
        const testBag4 = new Bag(-0.01)
        expect(testBag4.valid_weight()).toBe(false)
    })
})
