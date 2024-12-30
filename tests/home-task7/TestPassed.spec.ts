import { test, expect } from '@playwright/test';

test("Exam passed - 50 note", async () => {
  const result = isExamPassed(50);
  expect(result).toBeTruthy();
});

test("Exam passed negative - 49 note", async () => {
  const result = isExamPassed(49);
  expect(result).toBeFalsy();
});

test("Exam passed - 51 note", async () => {
  const result = isExamPassed(51);
  expect(result).toBeTruthy();
});

function isExamPassed(number) {
  if (typeof number === "number") {
    if (number >= 50) {
      console.log("Congrats you passed exam");
      return true;
    }  else {
      console.log('Oh, sorry mate. You failed exam. Try one more time');
      return false;
    }
  } else {
    throw Error("Please pass number to the method to check if exam is passed");
  }
}
