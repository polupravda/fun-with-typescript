import {addF} from "../src/index";

describe('addF', () => {
    it('should add two numbers with two invocations', () => {
        const six = addF(3)(3);
        const six2 = addF(2)(4);

        expect(six).toBe(6);
        expect(six2).toBe(6);
    })
})