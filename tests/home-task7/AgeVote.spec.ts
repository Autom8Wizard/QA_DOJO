import { test, expect } from '@playwright/test';

test("Adult user", async () => {
  const result = isAllowedToVote(19);
  expect(result).toBeTruthy();
});

test("Young user", async () => {
  const result = isAllowedToVote(17);
  expect(result).toBeFalsy();
});

test("Full-grown user", async () => {
  const result = isAllowedToVote(18);
  expect(result).toBeTruthy();
});

function isAllowedToVote(number) {
  if (typeof number === "number") {
    if (number >= 18) {
      console.log("Congrats you are able to vote");
      return true;
    }  else {
      console.log('Please wait. After: ' + (18-number) + " years you will be able to vote");
      return false;
    }
  } else {
    throw Error("Please pass number to the method to check if user is able to vote");
  }
}
