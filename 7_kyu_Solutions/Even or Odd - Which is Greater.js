/* Even or Odd - Which is Greater?
DESCRIPTION:
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/
let arr1 = [1, 2, 3, 4, 5, 6];
let arr = [7, 2, 3, 4, 5, 6];

function evenOrOdd(str) {
    let arr = str.split('');
    let odd = 0;
    let even = 0;
    let result = "";
    for (i=0; i<=arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even+=arr[i];
            console.log(even, odd);
        } else {
            odd+=arr[i]; 
            console.log(even, odd);
        }
    }
    if (odd===even) {
        result = "Even and Odd are the same";
    } else if (odd > even) {result = "Odd is greater than Even";  
    } else {
        result = "Even is greater than Odd"; 
    }
    return result;
}
console.log(evenOrOdd('123'));


function evenOrOdd(str) {
    let odd=[];
    let even=[];
    str.split``.map(v=>(v*1)%2===0?even.push(v):odd.push(v))
    odd=odd.reduce((a,b)=>a+b*1,0);
    even=even.reduce((a,b)=>a+b*1,0)
    return odd>even?'Odd is greater than Even':odd<even?'Even is greater than Odd':'Even and Odd are the same'
}


/*const evenOrOdd = (str) => {
    const digits = str.split('').map((val) => +val);
    const { odd, even } = digits.reduce(
      (acc, val) => {
        if (val % 2 === 0) {
          acc.even += val;
          return acc;
        }
        acc.odd += val;
        return acc;
      },
      { odd: 0, even: 0 }
    );
  
    return even === odd
      ? 'Even and Odd are the same'
      : even > odd
      ? 'Even is greater than Odd'
      : 'Odd is greater than Even';
  };*/

  function evenOrOdd(str) {
    let e = 0, o = 0
    for(let i = 0; i < str.length; i++){
      if (str[i] % 2){
        o+=+str[i]  
      }else{
        e+= +str[i]
      }
    }
      return o === e ? 'Even and Odd are the same': e > o ? 'Even is greater than Odd' : 'Odd is greater than Even'
    }