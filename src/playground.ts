function isOperation(char: string): boolean {
    return eval(1 + char + 1) < 3;
    throw new Error('Not yet implemented');
  }

  const char = "/";
console.log(isOperation(char));