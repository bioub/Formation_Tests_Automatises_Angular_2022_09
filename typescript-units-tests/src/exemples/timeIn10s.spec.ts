import { timeIn10s } from "./timeIn10s";

describe('timeIn10s function', () => {
  it('should add 10s to current timestamp', () => {
    // const spy = spyOn(Date, 'now').and.callFake(() => 1662384095380);
    const spy = spyOn(Date, 'now').and.returnValue(1662384095380);
    expect(timeIn10s()).toBe(1662384095390)
    expect(spy).toHaveBeenCalled();
  });
});
