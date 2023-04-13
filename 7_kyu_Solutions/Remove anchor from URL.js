/*Remove anchor from URL
DESCRIPTION:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/
function removeUrlAnchor(url){
    return url.split('#')[0]; // as stated, # symbol will be a divider. 
    //We create an array where the 1st element will be everything before #  
  }
console.log(removeUrlAnchor("www.codewars.com#about"))

function returnUrl(string) {
        return string.replace(/#.*/gi, ""); // we replace with an emptiness everything starting from #
}

console.log(returnUrl("www.codewars.com#about")) //www.codewars.com

const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
