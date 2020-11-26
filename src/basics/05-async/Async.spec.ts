import {AsyncInterface} from './Async.interface';

const Async: AsyncInterface = require(useSolution ? './Async.solution' : './Async.template').Async;

describe('Async', () => {

  describe('isPlainObject', () => {
    it('should ...', () => {
      expect(true).toBe(true);
    });
  });

});

