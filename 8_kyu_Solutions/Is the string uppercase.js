/*Is the string uppercase?
DESCRIPTION:
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
}

  //code checks if the uppercase version of the string is equal to the original string, indicating that the string is all uppercase. 
  //If they are equal, it returns true; otherwise, it returns false.

