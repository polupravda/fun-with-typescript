import {mul} from "../src/index";

describe('mul', () => {
    it('should multiply two numbers', () => {
        const six = mul(2, 3);
        const six2 = mul(6, 1);

        expect(six).toBe(6);
        expect(six2).toBe(6);
    })
})