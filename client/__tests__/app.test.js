
const { getName, getInput } = require('../app')

describe('app module', () => {
  describe('getName()', () => {
    it('prints the name to the console', () => {
      const testName = getName()
      expect(testName).toBeDefined()
    });
  });
  describe('getInput()', () => {
    it('prints the input to the console', () => {
      const testInput = getInput()
      expect(testInput).toBeDefined()
    });
  });
});
