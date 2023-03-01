/*Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.*/

function noSpace(x){
    return x.replace(/\s/g,''); //use replace method
}
  // We take a string as an argument and returns the same string with all whitespace characters (spaces, tabs, etc.) removed.
  //It uses the replace() method to search for whitespace characters 
  // and replace them with an empty string.