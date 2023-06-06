/*Multiply the number
DESCRIPTION:
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 # 3 * 5¹
multiply(10)==250 # 10 * 5²
multiply(200)==25000 # 200 * 5³
multiply(0)==0 # 0 * 5¹
multiply(-3)==-15 # -3 * 5¹
*/
function multiply(number){    
    return number * Math.pow(5, String(Math.abs(number)).length); 
}
  // God knows where there should be a debugging, but still
  // according to the task, we need to multiply the number on 5 powered to the length of the number
  // to avoid errors with negatives we first get absolute value (take away - for negatives)
  // then we stringify the number and get its length
  // and finally we get 5 powered to this value to be multiplied