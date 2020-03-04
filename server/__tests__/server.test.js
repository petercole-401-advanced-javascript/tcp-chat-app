
const {doWithBuffer, broadcast} = require('../server')

xdescribe('server module', () => {
  xdescribe('doWithBuffer()', () => {
    it('properly translates raw data to a trimmed string', () => {
      const rawData = '<Buffer 7b 22 65 76 65 6e 74 54 79 70 65 22 3a 22 6d 65 73 73 61 67 65 22 2c 22 70 61 79 6c 6f 61 64 22 3a 22 3c 6b 64 3e 3a 20 6b 64 22 7d>';
      expect(doWithBuffer(rawData)).toEqual('<kd>: kd');
    });
  });  
  xdescribe('broadcast()', () => {
    it('', () => {
      
    });
  });
});
 