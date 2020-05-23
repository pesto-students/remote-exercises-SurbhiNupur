function chunkArrayInGroups(array, chunkSize) {
  var twoDArray = [] ;
  var index = 0;
  for(let i=0 ; i<array.length ; i++){
    var endIndex = i+chunkSize;
    if((i+chunkSize) > array.length){
          endIndex =array.length +1;
    } 
    twoDArray[index++] = array.slice(i, endIndex);
    i +=  chunkSize-1;
  }
  return twoDArray;
}
export {
  chunkArrayInGroups,
};
