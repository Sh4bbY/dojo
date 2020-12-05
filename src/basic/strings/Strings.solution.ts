import { StaticInterface } from "../../util/static.decorator";
import { StringsInterface } from "./Strings.interface";

@StaticInterface<StringsInterface>()
export class Strings {
  /**
   * returns the upperCase representation of the given string
   */
  public static upperCase(str: string): string {
    return str.toUpperCase();
  }

  /**
   * returns the lowerCase representation of the given string
   */
  public static lowerCase(str: string): string {
    return str.toLowerCase();
  }

  /**
   * returns a representation of the given string where upperCase and lowerCase got switched
   */
  public static reverseCase(str: string): string {
    let output = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        output += str[i].toUpperCase();
      } else {
        output += str[i].toLowerCase();
      }
    }
    return output;
  }

  /**
   * returns the amount of occurrences of a given word within a string
   */
  public static countOccurrence(str: string, word: string): number {
    const output = [];
    let indexOfWord = str.indexOf(word);
    while (indexOfWord != -1) {
      output.push(indexOfWord);
      indexOfWord = str.indexOf(word, indexOfWord + 1);
    }
    return output.length;
  }

  /**
   * returns a modified string where all keys of the replace object got replaced with their respective values
   */
  public static replaceOccurrence(str: string, replace: { [key: string]: string }): string {
    const array = str;
    const toReplace: string[] = Object.keys(replace);
    const replacer = Object.values(replace);
    throw new Error("Not yet implemented");
  }

  /**
   * returns a object with all characters of the given string as keys with the count of occurrences as value.
   */
  public static countCharacters(str: string): { [char: string]: number } {
    let outputObj = {};
    function countCharacter(char, str) {
      const output = [];
      let indexOfStr = str.indexOf(char);
      while (indexOfStr != -1) {
        output.push(indexOfStr);
        indexOfStr = str.indexOf(char, indexOfStr + 1);
      }
      return output.length;
    }
    for (let i = 0; i < str.length; i++) {
      outputObj[str[i]] = countCharacter(str[i], str);
    }
    return outputObj;
  }

  /**
   * returns a object with all characters of the given string as keys with the count of occurrences as value.
   */
  public static isPalindrome(str: string): boolean {
    return str === str.split("").reverse().join("");
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
    function findSubstring(substring, subStringEnd) {
      if (str.includes(substring, subStringEnd)) {
        return substring;
      }
      return;
    }
    // findSubstring(substring);
    let output = [];
    for (let i = 0; i < str.length - 10; i++) {

      let subString = str.substring(i, i+10);
      if (findSubstring(subString, i+10) != undefined) {
        output.push(findSubstring(subString, i+10));
      }
    }

    return output;
  }
}
