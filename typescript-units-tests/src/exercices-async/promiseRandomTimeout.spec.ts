import { promiseRandomTimeout } from "./promiseRandomTimeout";

describe('promiseRandomTimeout function', () => {
  it('should return value in random time', async () => {
    const val = await promiseRandomTimeout('abc');
    expect(val).toBe('abc');
  })
});