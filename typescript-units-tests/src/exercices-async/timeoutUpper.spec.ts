import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {
  it('should call callback with uppercase value', () => {
    jasmine.clock().install();
    
    const spy = jasmine.createSpy();
    timeoutUpper('abc', spy);
    
    jasmine.clock().tick(1000);
    expect(spy).toHaveBeenCalledWith('ABC');

    jasmine.clock().uninstall();
  });
});