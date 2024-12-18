function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is a potential problem.
  }
  return a + b;
}