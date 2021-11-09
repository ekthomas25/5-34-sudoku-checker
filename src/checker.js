export function differentNums(array) {
  let returnStatement = true
  let arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < array.length; i++) {
    if (arrayNums.includes(array[i])) {
      arrayNums.splice(arrayNums.indexOf(array[i]), 1);
      console.log(arrayNums)
    } else {
        returnStatement = false;
    }
  }
  return returnStatement;
};

export function checkArray(array) {
  let returnStatement = true
  array.forEach(function(element) {
    if (!element) {
      returnStatement = false;
    }
  });
  return returnStatement;
};