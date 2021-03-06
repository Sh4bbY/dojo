import {StaticInterface} from '../../util/static.decorator';
import {StringsInterface} from './Strings.interface';


@StaticInterface<StringsInterface>()
export class Strings {
  /**
   * returns the upperCase representation of the given string
   */
  public static upperCase(str: string): string {
    throw new Error('Not yet implemented');
  }

  /**
   * returns the lowerCase representation of the given string
   */
  public static lowerCase(str: string): string {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a representation of the given string where upperCase and lowerCase got switched
   */
  public static reverseCase(str: string): string {
    throw new Error('Not yet implemented');
  }

  /**
   * returns the amount of occurrences of a given word within a string
   */
  public static countOccurrence(str: string, word: string): number {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a modified string where all keys of the replace object got replaced with their respective values
   */
  public static replaceOccurrence(str: string, replace: { [key: string]: string }): string {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a object with all characters of the given string as keys with the count of occurrences as value.
   */
  public static countCharacters(str: string): { [char: string]: number } {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a object with all characters of the given string as keys with the count of occurrences as value.
   */
  public static isPalindrome(str: string): boolean {
    throw new Error('Not yet implemented');
  }

  /**
   * All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG".
   * When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
   *
   * Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
   *
   * Example 1:
   * Input: str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
   * Output: ["AAAAACCCCC","CCCCCAAAAA"]
   */
  public static findRepeatedDnaSequences(str: string): string[] {
    throw new Error('Not yet implemented');
  }
}
