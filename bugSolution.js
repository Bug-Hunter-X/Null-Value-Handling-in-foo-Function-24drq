function foo(a, b) {
  // Handle null values explicitly
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}
//Or using optional chaining and nullish coalescing operator
function foo(a, b) {
  return (a ?? 0) + (b ?? 0);
} 