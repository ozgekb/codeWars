'use strict'
function capitalize(s){
let str1 = [];
let str2 = [];
let result = [];
let ch;
for (i = 0; i < s.length; i++)
{
  if(i % 2 == 0)
  {
     ch = s[i].toUpperCase();
     str1.push(ch);
  }
  if(i%2 == 1)
  {
    ch = s[i].toLowerCase();
    str1.push(ch);

  }
}
  str1 = str1.join('');
  result.push(str1)
 for (i=0; i<s.length; i++)
{
  if(i%2 == 1)
  {
     ch = s[i].toUpperCase();
     str2.push(ch);
  }
  if(i%2 == 0)
  {
     ch = s[i].toLowerCase();
     str2.push(ch);
  }

}
  str2 = str2.join('');
  result.push(str2)
  return result;
};
