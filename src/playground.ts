/**
 * returns a new array with the same items but in ascending order of the given property
 */

const values = [
  { name: "John", age: 48 },
  { name: "Zoe", age: 9 },
  { name: "Jane", age: 23 },
  { name: "Benny", age: 34 },
  { name: "Chris", age: 22 },
];

const property = "name";

function sortObjects(values: any[], property: string) {
  if (property === "age") {
    return values.sort(function (x, y) {
      return x.age - y.age;
    });
  }
  if (property === "name") {
    return values.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
}

console.log(sortObjects(values, property));
