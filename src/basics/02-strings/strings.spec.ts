import * as strings from './strings.solution';

describe('strings', () => {

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

  describe('countOccurrence', () => {
    it('should count the occurrence of a given word within a string', () => {
      expect(strings.countOccurrence('Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t fuzzy, was he?', 'Fuzzy')).toBe(3);
      expect(strings.countOccurrence('You know New York, you need New York, you know you need unique New York', 'New York')).toBe(3);
      expect(strings.countOccurrence('Fred fed Ted bread, and Ted fed Fred bread', 'Ted')).toBe(2);
    });
  });

  describe('replaceOccurrence', () => {
    it('should count the occurrence of a given word within a string', () => {
      expect(strings.replaceOccurrence('Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t fuzzy, was he?', {Fuzzy: 'Cool'}))
        .toBe('Cool Wuzzy was a bear. Cool Wuzzy had no hair. Cool Wuzzy wasn’t fuzzy, was he?');
      expect(strings.replaceOccurrence('You know New York, you need New York, you know you need unique New York', {'New York': 'Sidney'}))
        .toBe('You know Sidney, you need Sidney, you know you need unique Sidney');
      expect(strings.replaceOccurrence('Fred fed Ted bread, and Ted fed Fred bread', {Ted: 'John', Fred: 'Jane'}))
        .toBe('Jane fed John bread, and John fed Jane bread');
    });
  });

});
