import { genererAlea } from "./genererAlea";

const customMatchers = {
  toBeInArray(matchersUtil: jasmine.MatchersUtil) {
    return {
      compare(actual: any, expected: any) {
        const result: jasmine.CustomMatcherResult = {
          pass: matchersUtil.contains(expected, actual),
        };

        if (result.pass) {
          result.message = actual + ' in array ' + expected;  
        } else {
          result.message = actual + ' not in array ' + expected;  
        }

        return result;
      }
    }
  }
}

describe('genererAlea function', () => {
  // it('should return random value', () => {
  //   const refRandom = Math.random;
  //   Math.random = () => 0.4;
  //   expect(genererAlea(0, 10)).toBe(4);
  //   Math.random = refRandom;
  // });
  // it('should call Math.random normally', () => {
  //   expect(Math.random()).not.toBe(0.4);
  // })
  beforeEach(() => {
    jasmine.addMatchers(customMatchers);
  })
  it('should return random value', () => {
    spyOn(Math, 'random').and.returnValue(0.4);
    expect(genererAlea(0, 10)).toBe(4);
    expect(genererAlea(10, 20)).toBe(14);
  });
  it('should call Math.random normally', () => {
    expect(Math.random()).not.toBe(0.4);
  })
  it('should return value in interval', () => {
    expect([0, 1, 2].includes(genererAlea(0, 2))).toBeTrue();
  });
  it('should return value in interval', () => {
    (expect(genererAlea(0, 2)) as any).toBeInArray([0, 1, 2]);
  });
});
