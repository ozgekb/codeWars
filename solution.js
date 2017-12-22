function capitalize(s,arr){
 for (var i=0; i<arr.length; i++){
    var index = arr[i];
    s = s.substring(0,index) + s.charAt(index).toUpperCase() + s.substring(index+1);
  }
  return s;
};
