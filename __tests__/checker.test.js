import differnetNums from './../src/checker.js';

describe(differnetNums, () => {

  test('should take an array of numbers and return true if they are all different', () => {
    expect(differnetNums([1,2,3,4,5,6,7,8,9])).toEqual(true); 
  })
})