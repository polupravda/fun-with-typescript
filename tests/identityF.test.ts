import { identityF } from '../src/index';

describe('identityF', () => {
  it('should take an argument and return a function that returns that argument', () => {
    const threeF = identityF(3);
    const three = threeF();

    expect(three).toBe(3);
  });
});
