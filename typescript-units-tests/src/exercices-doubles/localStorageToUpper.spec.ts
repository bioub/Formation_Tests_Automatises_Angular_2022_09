import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  beforeEach(() => {
    globalThis.localStorage = {
      getItem(key: string) {
        return 'fake value';
      }
    } as any;
  });

  afterEach(() => {
    delete (globalThis as any).localStorage;
  });

  it('should not work in Node.js', () => {
    expect(localStorageToUpper('myKey')).toBe('FAKE VALUE');
  });
});