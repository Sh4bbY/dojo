export interface StringsInterface {
  upperCase(str: string): string;

  lowerCase(str: string): string;

  reverseCase(str: string): string;

  countOccurrence(str: string, word: string): number;

  replaceOccurrence(str: string, replace: { [key: string]: string }): string;

  // isPalindrome(str: string): boolean;
}
