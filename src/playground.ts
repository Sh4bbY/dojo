// import {Calculator} from "./advanced/calculator/Calculator.solution";

// const calc = new Calculator();

// console.log(calc.calculate("1+1"));


// recursive function dafür bauen:
console.log(process.cwd);
const fs = require("fs");
const filePath = "./src/1.txt";
fs.readFile(filePath, "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
  fs.readFile(data, "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    fs.readFile(data, "utf-8", (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);
      fs.readFile(data, "utf-8", (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(data);
        fs.readFile(data, "utf-8", (error, data) => {
          if (error) {
            console.log(error);
            return;
          }
          console.log(data);
        });
      });
    });
  });
});


