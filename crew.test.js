const Crew = require("./crew")
const Person = require("./person")

describe('CrewMember class', () => {
    test('crewMember has name', () => {
        const testCrew = new Crew('Anna')
        expect(testCrew.name).toBe('Anna')
    });
    test('crewMember has position', () => {
        const testCrew2 = new Crew('pilot')
        expect(testCrew2.position).toBe('pilot')
    });
    test('crewMember has staff ID #', () => {
        const testCrew3 = new Crew('326')
        expect(testCrew3.staffNumber).toBe('326')
    });
});