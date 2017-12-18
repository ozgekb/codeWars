function filter_list(l) {
  let arr = l.filter(num =>  {
    return typeof num === "number";
  });
  return arr; 
}
