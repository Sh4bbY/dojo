const strings = require(useSolution ? './strings.solution' : './strings');

xdescribe('strings', () => {

  describe('upperCase', () => {
    it('should transform a string to its Uppercase representation', () => {
      expect(strings.upperCase('foobar')).toBe('FOOBAR');
      expect(strings.upperCase('Hello World')).toBe('HELLO WORLD');
    });
  });

  describe('lowerCase', () => {
    it('lowerCase should transform a string to its Lowercase representation', () => {
      expect(strings.lowerCase('FOOBAR')).toBe('foobar');
      expect(strings.lowerCase('Hello World')).toBe('hello world');
    });
  });

  describe('reverseCase', () => {
    it('should reverse Uppercase to Lowercase and vice versa', () => {
      expect(strings.reverseCase('FooBar')).toBe('fOObAR');
      expect(strings.reverseCase('Hello World')).toBe('hELLO wORLD');
    });
  });

});
