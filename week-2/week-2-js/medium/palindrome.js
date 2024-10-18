/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  console.log(str);
  let n= str.length-1;
  let i=0;
  while( i < n)
  {
    if( str[n] == ' ')
        i++;
    if( str[n] == ' ')
        n--;
      
    if( str[i] != str[n] )
      return false;
    i++;
    n--; 
  }
  return true;
}
const ans=isPalindrome("Anna");
module.exports = isPalindrome;
