import { hello } from "./hello";

describe('hello function', () => {
  it('should return Hello Romain', () => {
    expect(hello('Romain')).toBe('Hello Romain');
  });
});