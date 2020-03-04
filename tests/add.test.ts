import {add} from "../src/index";

describe('add', () => {
    it('should add two numbers', () => {
        const six = add(3, 3);
        const six2 = add(2, 4);

        expect(six).toBe(6);
        expect(six2).toBe(6);
    })
})