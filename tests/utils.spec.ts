import { isValidDimension } from "../src/utils"


describe('test if valid dimention', () => {
    test('should return true given a valid dimension', () => {

        expect(isValidDimension(0)).toBeTruthy();
        expect(isValidDimension(1)).toBeTruthy();
        expect(Math.pow(Math.random() * Math.floor(Infinity), 2)).toBeTruthy()
    })

    test('should return false given an invalid dimension', () => {
        expect(isValidDimension(1.5)).toBeFalsy()
        expect(isValidDimension(1 + Math.pow(Math.random() * Math.floor(Infinity), 2))).toBeFalsy()
    })
})
