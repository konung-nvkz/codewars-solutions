/*Array.prototype.reverse()
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
*/
Array.prototype.reverse = function() {
    var arr = this.splice(0); //make a copy of an array 
    
    for(var i=0; i<arr.length; i++) {
        this.unshift(arr[i]);
    }   
    
    return this;
};

  // unshift() method is called on the original array (this)
  // to add the element to the beginning of the array.  

/* //one more solution, that looks easier
Array.prototype.reverse = function() {
  var stack = [];
  
  // iterate `this` backwards
  for (var i = this.length - 1; i >= 0; i--) {
    // push the items in reverse to the back of the stack/intermediate
    stack.push(this[i]);
  }
  
  // mutate self to be === to stack
  for (var i in stack) {
    this[i] = stack[i]
  }
  
  return this;
};
*/