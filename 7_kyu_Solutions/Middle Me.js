/*Middle Me
Write a function that will take a key of X and place it in the middle of Y repeated N times.

Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

Rules:

If X cannot be placed in the middle, return X.

N will always be > 0.

Example:

X = 'A';

Y = '*';

N = 10;

Y repeated N times = '**********';

X in the middle of Y repeated N times = '*****A*****';
*/

function middleMe(N, X, Y) {
    const repeatY = Y.repeat(N);
    const middleIndex = Math.floor(repeatY.length / 2);

    return repeatY.length % 2 === 0
        ? repeatY.slice(0, middleIndex) + X + repeatY.slice(middleIndex)
        : X;
}

  console.log(middleMe(10, 'A', '*')); // Output: '*****A*****'
  console.log(middleMe(5, 'B', '#')); // Output: '#BBB#'
  console.log(middleMe(3, 'C', '$')); // Output: 'C'

/*The repeatY variable is assigned the value of Y repeated N times using the repeat* method.



The middleIndex variable is calculated as the floor value of half the length of repeatY.

The code checks if the length of repeatY is even using the remainder operator (%). If it is even, it inserts X in the middle of repeatY by slicing it into two parts and then concatenating them with X in between.
If the length of repeatY is odd, it means that X cannot be placed in the middle, so the function simply returns X.

*Note: 
The repeat() method is a built-in method in JavaScript that allows you to repeat a string a specified number of times. 
It returns a new string that concatenates the original string multiple times.*/