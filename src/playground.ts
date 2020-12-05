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

const str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
    function findSubstring(substring, subStringEnd) {
      if (str.includes(substring, subStringEnd)) {
        return substring;
      }
      return;
    }
    // findSubstring(substring);
    let output = [];
    for (let i = 0; i < str.length - 10; i++) {
      const subStringEnd = i+1;
      let subString = str.substring(i, i+10);
      if (findSubstring(subString, subStringEnd) != undefined) {
        output.push(findSubstring(subString, subStringEnd));
      }
    }

    console.log(output);
  