import { User } from "./user";

describe('class User', () => {
  let user = new User('Romain');

  describe('method hello', () => {
    beforeEach(() => {
      user.name = 'Christophe';
    })

    it('should show the proper name', () => {
      expect(user.name).toBe('Christophe');
    })

    it('should show hello', () => {
      expect(user.hello()).toBe('Hello my name is Christophe');
    })
  });
});