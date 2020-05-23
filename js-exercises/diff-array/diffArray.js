function diffArray() {
  var firstArray = arguments[0];
  var secondArray = arguments[1];

  let diffArray= firstArray
  .filter(x => !secondArray.includes(x))
  .concat(secondArray.filter(x => !firstArray.includes(x)));
  
  return diffArray;
}
export {
  diffArray,
};
