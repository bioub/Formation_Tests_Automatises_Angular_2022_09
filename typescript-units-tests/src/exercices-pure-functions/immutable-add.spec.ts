import { immutableAdd } from "./immutable-add";

describe('immutableAdd function', () => {
  it('should add new a key/value', () => {
    const coords = {x: 1, y: 2};
    expect(immutableAdd(coords, 'z', 3)).toEqual({x: 1, y: 2, z: 3});
  });
  it('should create a new object', () => {
    const coords = {x: 1, y: 2};
    expect(immutableAdd(coords, 'z', 3)).not.toBe(coords);
  });
});