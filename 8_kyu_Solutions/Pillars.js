/*Pillars
DESCRIPTION:
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/
function pillars(numPill, dist, width) {
    // your code here  
    return !(numPill > 1) ? 0 : (numPill-2)*width + (numPill-1)*dist*100;
}
  // first we check how many pillars are there - 'numPill>1'
  // if this statement is false and we have 1 pillar, zero pillars (or less then 0, haha)
  // the distance is equal to 0
  // if it is true, the distance will be a sum of
  // First of all - width of all pillars without the first and the last 
  //(we don't count them and take (numPill-2)*width
  // total distance between pillars in cm (it is (numPill-1)*dist*100+)