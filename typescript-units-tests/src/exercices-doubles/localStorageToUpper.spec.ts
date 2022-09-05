import { localStorageToUpper } from "./localStorageToUpper";

globalThis.localStorage = {
  getItem(key: string) {
    return 'FAKE VALUE';
  }
} as any;

describe('localStorageToUpper function', () => {
  it('should not work in Node.js', () => {
    expect(localStorageToUpper('myKey')).toBe('FAKE VALUE');
  });
});