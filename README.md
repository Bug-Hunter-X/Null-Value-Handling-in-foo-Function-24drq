# JavaScript Bug: Null Value Handling in foo Function

This repository demonstrates a common bug in JavaScript related to the handling of null values. The `foo` function incorrectly handles null inputs, potentially leading to unexpected results or errors.

## Bug Description

The `foo` function adds two numbers. However, it doesn't handle null values correctly.  If either `a` or `b` is null, it returns null without further checks. This might cause issues if the function is used in a context where null addition isn't expected.

## Solution

The solution addresses the bug by explicitly checking for and handling null values, providing more robust behavior and preventing unexpected errors.

## How to Reproduce

1. Clone the repository.
2. Run `bug.js`. Observe the unexpected results when null values are passed.
3. Run `bugSolution.js` to see the corrected behavior.