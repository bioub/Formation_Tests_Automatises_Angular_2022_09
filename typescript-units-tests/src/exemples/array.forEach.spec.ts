// ['A', 'B', 'C'].forEach((val) => {
//   console.log(val);
// });

describe('forEach method', () => {
  // it('should call the callback for each element', () => {
  //   let callCount = 0;
  //   const callback = (val: string) => {
  //     callCount++;
  //     expect(val).toBe('A');
  //   };

  //   ['A'].forEach(callback);
  //   expect(callCount).toBe(1);
  // });
  it('should call the callback for each element', () => {
    const spy = jasmine.createSpy();

    ['A', 'B', 'C'].forEach(spy);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith('A', 0, ['A', 'B', 'C']);
    expect(spy).toHaveBeenCalledWith('B', 1, ['A', 'B', 'C']);
    expect(spy).toHaveBeenCalledWith('C', 2, ['A', 'B', 'C']);
    // expect(spy.calls.count()).toBe(3);
    // expect(spy.calls.first().args).toEqual(['A', 0, ['A', 'B', 'C']]);
  });
});