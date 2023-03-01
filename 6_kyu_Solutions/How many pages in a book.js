/*How many pages in a book?

DESCRIPTION:
Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.
Task: Given the summary, find the number of pages n the book has.
Example
If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.
Be aware that you'll get enormous books having up to 100.000 pages.
All inputs will be valid.*/

function amountOfPages(summary){
    let string = ''; // set an empty string
    let lastPage = 0; // set a variable for last page

    for (let i = 1; i <= summary; i++){ // start counter
        string += i; // ech page will concatenate with previous 1, 12, 123 etc.
        if (string.length === summary) { 
          // compare the length of the string with a number we get at function start
            lastPage = i; // if it is so we say that we are finally over 
        }
    }
return lastPage; // return our result
}