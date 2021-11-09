export default function differnetNums(array) {
  let arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 1; i < array.length; i++) {
    if (array.includes(array[i])) {
      arrayNums.splice(arrayNums.indexOf(array[i]), 1);
    } else {
        return false;
    }
  }
  return true;
};

