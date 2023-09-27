/*Fuel Calculator: Total Cost
DESCRIPTION:
In this kata you will have to write a function that takes litres and 
pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, 
purchases of 4 or more litres get a discount of 10 cents per litre, 
and so on every two litres, up to a maximum discount of 25 cents per litre. 
But total discount per litre cannot be more than 25 cents. 
Return the total cost rounded to 2 decimal places. 
Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents
*/

//ternary, not optimal, but solving the task
function fuelPrice(litres, pricePerLitre) {
    return (litres<2) ? +(litres*pricePerLitre).toFixed(2) :
        (litres<4) ? +(litres*(pricePerLitre-0.05)).toFixed(2):
        (litres<6) ? +(litres*(pricePerLitre-0.10)).toFixed(2):
        (litres<8) ? +(litres*(pricePerLitre-0.15)).toFixed(2):
        (litres<10) ? +(litres*(pricePerLitre-0.20)).toFixed(2):
        +(litres*(pricePerLitre-0.25)).toFixed(2)
}

//more elegant solution, we choose what is less - discount by formula, or 0.25

function fuelPrice(litres, pricePerLiter) {
    var discount = Math.min(Math.floor(litres/2) * 0.05, 0.25);
    var price = litres * (pricePerLiter - discount);
    return Math.round(price*100) / 100;
}

