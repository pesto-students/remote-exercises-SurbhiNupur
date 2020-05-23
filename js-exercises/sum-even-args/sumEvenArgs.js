const sumEvenArgs = (...args) => {
  var sumOfEvenArgs = 0;
  for (let i = 0; i< args.length ; i++){
    if(isEven(args[i])){
      sumOfEvenArgs += args[i];
    }
  }
  return sumOfEvenArgs;
}
function  isEven(num){
  return num % 2 == 0 ;
}
export { sumEvenArgs };
