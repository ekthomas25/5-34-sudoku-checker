import { differentNums } from './../src/checker.js';
import { checkArray } from './../src/checker.js';
import { arrayRow } from './../src/checker.js';

describe(differentNums, () => {

  test('should take an array of numbers and return true if they are all different', () => {
    expect(differentNums([1,2,3,4,5,6,7,8,9])).toEqual(true); 
  });

  test('should take an array of numbers and return false if a number repeats', () => {
    expect(differentNums([1,1,2,3,4,5,6,7,8])).toEqual(false);
  });
});

describe(checkArray, () => {

  test('It should check one array to see if there is a false in that array', () => {
    expect(checkArray([true, false, false, true])).toEqual(false);
  });

  test('should check one array to see if all elements are true in that array', () => {
    expect(checkArray([true, true, true, true])).toEqual(true);
  });
});

describe(arrayRow, () => {

  test('should take an array splice the first 9 elements and return those 9 elements', () => {
    expect(arrayRow([1,2,3,4,5,6,7,8,9,1,2,3,4])).toEqual([1,2,3,4,5,6,7,8,9]);
  });
});