import { timeoutPromise } from './timeoutPromise';

describe('timeoutPromise function', () => {
  // it('should call callback', () => {
  //   const spy = jasmine.createSpy();
  //   return timeoutPromise(1000)
  //     .then(spy)
  //     .then(() => {
  //       expect(spy).toHaveBeenCalled();
  //     });
  // });

  it('should call callback (fake timers)', () => {
    jasmine.clock().install();
    const spy = jasmine.createSpy();
    const promise = timeoutPromise(1000)
      .then(spy)
      .then(() => {
        expect(spy).toHaveBeenCalled();
      });

    jasmine.clock().tick(1000);
    jasmine.clock().uninstall();
    return promise;
  });

  it('should call callback (fake timers)', async () => {
    jasmine.clock().install();
    const spy = jasmine.createSpy();
    const promise = timeoutPromise(1000); // setTimeout

    jasmine.clock().tick(1000);
    await promise;
    spy();
    expect(spy).toHaveBeenCalled();
    jasmine.clock().uninstall();
  });
});