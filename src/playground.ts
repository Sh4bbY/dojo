const str = "test";
// const char = "t";

function countCharacter(char, str) {
  const output = [];
  let indexOfWord = str.indexOf(char);
  while (indexOfWord != -1) {
    output.push(indexOfWord);
    indexOfWord = str.indexOf(char, indexOfWord + 1);
  }
  return output.length;
}
let outputObj = {};
for (let i = 0; i < str.length; i++) {
  outputObj[str[i]] = countCharacter(str[i], str);
}
console.log(outputObj);