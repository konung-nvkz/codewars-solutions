/*Upstream/Downstream
Chingel is practicing for a rowing competition to be held on this saturday. 
He is trying his best to win this tournament for which he needs to figure out how much time 
it takes to cover a certain distance.

Input

You will be provided with the total distance of the journey, speed of the boat and whether
he is going downstream or upstream. 
The speed of the stream and direction of rowing will be given as a string. 
Check example test cases!

Output

The output returned should be the time taken to cover the distance. 
If the result has decimal places, round them to 2 fixed positions.
*/
function time(distance,boatSpeed,stream){
    let arr = stream.split(' ');   
    return (arr[0] == 'Downstream') ? 
    ((distance / (boatSpeed+arr[1]*1)).toFixed(2)*1) : 
    ((distance / (boatSpeed-arr[1]*1)).toFixed(2)*1)
}
console.log(time(24,10,"Downstream 2"))//2
console.log(time(24,14,"Upstream 2"))//2);
console.log(time(54,28,"Downstream 3"))//1.74);



function time(distance,boatSpeed,stream){
    const [direction, delta] = stream.split(' '),
        downstream = ((distance / (boatSpeed+delta*1)).toFixed(2)*1),
        upstream = ((distance / (boatSpeed-delta*1)).toFixed(2)*1);
    return (direction[0] == 'D') ? downstream : upstream;  
}
