/*Outrun your past self

You are running a race on a circular race track against the ghost of your past self.

Each time you lap your ghost, you get a confidence boost because you realize how much faster you got.

Given your speed (km/h), your ghosts speed (km/h), the length of the circular race track (km) and the time you run (h), predict how often you will lap your ghost.

Lapping your ghost means going from being behind your ghost to being in front of your ghost.
*/

function number_lappings(my_speed,ghost_speed,time,round_length){
    const difference = ( my_speed * time - ghost_speed * time )/  round_length;
    return ( difference < 0 ? 0 :
            ( Number.isInteger(difference) && difference > 0  ?
            difference - 1 :
            Math.floor(difference) ) 
            );  
}

//The code then checks if the difference is less than 0. 
//If it is, it means that the runner has not lapped the ghost and the function returns 0.

//If the difference is greater than or equal to 0, the code checks if the difference is an integer and greater than 0 using Number.isInteger() and a conditional statement. 
//If both conditions are true, it means that the runner has lapped the ghost at least once. 
//In this case, the code subtracts 1 from the difference to account for the initial lap when the runner overtakes the ghost.

//If the difference is not an integer or is less than or equal to 0, the code uses Math.floor() to round down the difference to the nearest integer. 
//This represents the number of times the runner has lapped the ghost.

//The final result is returned as the number of lappings.