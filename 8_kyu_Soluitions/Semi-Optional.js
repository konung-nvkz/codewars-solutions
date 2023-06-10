/*Semi-Optional
Dict to the passed-in value.

So, for example, if we execute the following code:

wrapper_obj = wrap("my_wrapped_string"); 
 # wrapper_obj should be  {"value":"my_wrapped_string"}
We would then expect the following statement to be true:

wrapper_obj["value"] == "my_wrapped_string"
Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.
*/

//correct value
function wrap(value) {
    return  {value};
}


//initial code
/*
function wrap(value) {
    return
    {
      value:value 
    };
  }*/