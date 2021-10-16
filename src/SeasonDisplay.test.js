const rewire = require("rewire")
const SeasonDisplay = rewire("./SeasonDisplay")
const getSeason = SeasonDisplay.__get__("getSeason")
// @ponicode
describe("getSeason", () => {
    test("0", () => {
        let callFunction = () => {
            getSeason(1.0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getSeason(-1, "December")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getSeason(9, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getSeason(1.0, 2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getSeason(0, "December")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getSeason(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
