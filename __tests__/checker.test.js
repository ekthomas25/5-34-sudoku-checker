import { differnetNums } from './../src/checker.js';
import { checkArray } from './../src/checker.js';

describe(differnetNums, () => {

  test('should take an array of numbers and return true if they are all different', () => {
    expect(differnetNums([1,2,3,4,5,6,7,8,9])).toEqual(true); 
  });
});

describe(checkArray, () => {

  test('It should check one array to see if there is a false in that array', () => {
    expect(checkArray([true, false, false, true])).toEqual(false);
  });
});