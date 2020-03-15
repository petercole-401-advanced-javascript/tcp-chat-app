
const { broadcast } = require('../server')

describe('server module', () => {
  describe('broadcast()', () => {
    it('sends stuff to the right socket', () => {
      const message = {
        eventType: 'message',
        messageType: 'group',
        payload: '<Peter> Peter'
      }
      const id = 1
      expect(broadcast(message, id)).toBeDefined()
    });
  });
});
