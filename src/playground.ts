const fn = () => 'test';

function timer() {
  setTimeout(fn, 100);
}

console.log(timer());
 