/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let map = new Array();
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  for(let i=0;i< 256;i++)
  {
    map.push(0);
    // console.log(map[i]);
  }

  for(let i=0;i< str1.length;i++)
  {
    map[str1[i].charCodeAt(0)]++;
  }

  for(let i=0;i<str2.length;i++)
  {
    map[str2[i].charCodeAt(0)]--;
  }

  for(let i=0;i<256;i++)
  {
    if(map[i] != 0)
        return false;
  }
  return true;
}


const ans=isAnagram("hwllo", "whllo");
console.log(ans);
module.exports = isAnagram;
