'use strict'
function isNice(arr){
  if(arr.length<1){
    return false;
  }
  for(var i=0; i<arr.length; i++){
    let isFound = false;
    for( var j=0; j<arr.length; j++){
      if(arr[i]-1 === arr[j] ||arr[i]+1 === arr[j]){
        isFound = true;
        break;
      }
    }
    if(isFound === false)
    {
     return false;
    }
  }
