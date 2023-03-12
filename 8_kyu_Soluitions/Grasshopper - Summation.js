/*Grasshopper - Summation
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

*/

var summation = function (num) { 
    return ((num**2)/2 + num/2) // we use mathematic formula instead of loops
    }
  // below there is an explanation in Russian
  /*Общая формула: S = ((a1 + an) * n)/2.
  Формула для а1 = 1, an = n: ((1 + n) * n)/2 = n^2/2 + n/2.  
    S1 = (20^2)/2 + 20/2 = 200 + 10 = 210.
    Сумма последовательных чисел от 1 до 100:
    S2= (100^2)/2 + 100/2 = 10000/2 + 50 = 5050.*/