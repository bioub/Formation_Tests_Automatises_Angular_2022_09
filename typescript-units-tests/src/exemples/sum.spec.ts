import { sum } from "./sum";

describe('sum function', () => {
  it('should add positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
