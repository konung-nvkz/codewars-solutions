/*Keypad horror

DESCRIPTION:
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only*/

function computerToPhone(numbers){

    let changedNumber = ""; // create an empty string

    for (i=0; i<numbers.length; i++) { // start checking numbers one by one

        switch (numbers.charAt(i)) { // return symbol with index "i" from initial string
        case "7": // in case it is 7
            changedNumber += "1"; // add up a new tring with 1
            break; //stop and go to next symbol of initial string
        case "8": // do the same with 8 and other numbers from task condition.
            changedNumber += "2";
            break;
        case "9":
            changedNumber += "3";
            break;
        case "1":
            changedNumber += "7";
            break;
        case "2":
            changedNumber += "8";
            break;
        case "3":
            changedNumber += "9";
            break;
        default: // set function behaviour for numbers we do not need to change
            changedNumber += numbers.charAt(i); // leave the symbol the same i.e. add up a new string with it.
        }
    }

    return changedNumber; // the result of the function is the string where some numbers are possibly changed
    }