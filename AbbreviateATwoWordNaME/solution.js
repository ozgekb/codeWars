function abbrevName(name){
   let myArray = name.split(' ');
   let nameInitial = [];
   let firstName = myArray[0][0];
   let lastName = myArray[1][0];
   nameInitial.push(firstName);
   nameInitial.push(lastName);
   var firstAndLast = nameInitial.join(".");
    let upper = firstAndLast.toUpperCase();
   return upper;
}
