import { test, expect } from '@playwright/test';

test("Day period - morning", async () => {
  const result = getCongratulationForDayTime(11);
  expect(result).toEqual('Доброго ранку');
});

test("Day period - day", async () => {
  const result = getCongratulationForDayTime(12);
  expect(result).toEqual('Доброго дня');
});

test("Day period - late day", async () => {
  const result = getCongratulationForDayTime(18);
  expect(result).toEqual('Доброго дня');
});

test("Day period - evening", async () => {
  const result = getCongratulationForDayTime(19);
  expect(result).toEqual('Доброго вечора');
});

test("Day period - late evening", async () => {
  const result = getCongratulationForDayTime(24);
  expect(result).toEqual('Доброго вечора');
});


function getCongratulationForDayTime(number) {
  if (typeof number === "number") {
    if (number < 12 && number>0) {
      console.log("Доброго ранку")
      return "Доброго ранку";
    } else if (number >= 12 && number<=18) {
      console.log("Доброго дня")
      return "Доброго дня";
    } else if(number > 18 && number<=24){
      console.log("Доброго вечора")
      return "Доброго вечора";
    }
  } else {
    throw Error("Please pass day time number (0-24) to get appropriate congratulation");
  }
}
