import { test, expect } from '@playwright/test';

test("Even number - positive", async () => {
  const result = isNumberEven(50);
  expect(result).toBeTruthy();
});

test("Even number - negative", async () => {
  const result = isNumberEven(49);
  expect(result).toBeFalsy();
});

test("Even number - zero", async () => {
  const result = isNumberEven(0);
  expect(result).toBeTruthy();
});

test("Even number - negative number", async () => {
  const result = isNumberEven(-1);
  expect(result).toBeFalsy();
});

function isNumberEven(number) {
  if (typeof number === "number") {
    if (number %2 == 0) {
      console.log(`Number ${number} is even`);
      return true;
    }  else {
      console.log(`Number ${number} is not even`);
      return false;
    }
  } else {
    throw Error("Please pass number to the method to check if it even");
  }
}
