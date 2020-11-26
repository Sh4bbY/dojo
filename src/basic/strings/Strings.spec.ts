import {Strings} from './Strings.solution';

describe('Strings', () => {

  describe('upperCase', () => {
    it('should transform a string to its Uppercase representation', () => {
      expect(Strings.upperCase('foobar')).toBe('FOOBAR');
      expect(Strings.upperCase('Hello World')).toBe('HELLO WORLD');
    });
  });

  describe('lowerCase', () => {
    it('lowerCase should transform a string to its Lowercase representation', () => {
      expect(Strings.lowerCase('FOOBAR')).toBe('foobar');
      expect(Strings.lowerCase('Hello World')).toBe('hello world');
    });
  });

  describe('reverseCase', () => {
    it('should reverse Uppercase to Lowercase and vice versa', () => {
      expect(Strings.reverseCase('FooBar')).toBe('fOObAR');
      expect(Strings.reverseCase('Hello World')).toBe('hELLO wORLD');
    });
  });

  describe('countOccurrence', () => {
    it('should count the occurrence of a given word within a string', () => {
      expect(Strings.countOccurrence('Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t fuzzy, was he?', 'Fuzzy')).toBe(3);
      expect(Strings.countOccurrence('You know New York, you need New York, you know you need unique New York', 'New York')).toBe(3);
      expect(Strings.countOccurrence('Fred fed Ted bread, and Ted fed Fred bread', 'Ted')).toBe(2);
    });
  });

  describe('replaceOccurrence', () => {
    it('should count the occurrence of a given word within a string', () => {
      expect(Strings.replaceOccurrence('Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t fuzzy, was he?', {Fuzzy: 'Cool'}))
        .toBe('Cool Wuzzy was a bear. Cool Wuzzy had no hair. Cool Wuzzy wasn’t fuzzy, was he?');
      expect(Strings.replaceOccurrence('You know New York, you need New York, you know you need unique New York', {'New York': 'Sidney'}))
        .toBe('You know Sidney, you need Sidney, you know you need unique Sidney');
      expect(Strings.replaceOccurrence('Fred fed Ted bread, and Ted fed Fred bread', {Ted: 'John', Fred: 'Jane'}))
        .toBe('Jane fed John bread, and John fed Jane bread');
    });
  });

});