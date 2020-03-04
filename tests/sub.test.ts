import {sub} from "../src/index";

describe('sub', () => {
    it('should subtract two numbers', () => {
        const six = sub(9, 3);
        const six2 = sub(10, 4);

        expect(six).toBe(6);
        expect(six2).toBe(6);
    })
})