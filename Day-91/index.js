function normal() {
    console.log(arguments[0]);    
}

normal(5);

const obj = {
    "name":"Ankit" ,
    "address":{
      "city": "Delhi",
      "state":"Delhi"
      }
    }
  const copied = {...obj}; // shallow copy
  copied.name = "Lalit";
  obj.address.city = "Indore";
  
  console.log(obj.address.city); // Indore
  console.log(copied.address.city); // Indore

  // deep Copy - JSON.stringify/parse, lodash, rfdc (really fast deep clone, ramda)