import { test, expect } from '@playwright/test';

test("Is number positive", async () => {
  const result = isNumberPositive(1);
  expect(result).toBeTruthy();
});

test("Is number positive - max value", async () => {
  const result = isNumberPositive(1.7976931348623157e308);
  expect(result).toBeTruthy();
});

test("Is number negative", async () => {
  const result = isNumberPositive(-1);
  expect(result).toBeFalsy();
});

test("Is number negative - min value", async () => {
  const result = isNumberPositive(-1.7976931348623157e308);
  expect(result).toBeFalsy();
});


function isNumberPositive(number) {
  if (typeof number === "number") {
    if (number > 0) {
      console.log("Number is positive");
      return true;
    } else if (number === 0) {
      console.log("Number is zero (0)");
      return false;
    } else {
      console.log("Number is negative");
      return false;
    }
  } else {
    throw Error("Please pass number to the method to check if it positive");
  }
}
