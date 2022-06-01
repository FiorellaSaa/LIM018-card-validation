const validator = {
  // ...
  isValid:(creditCardNumber)=>{
    const length = creditCardNumber.length;
    const reverNumber = creditCardNumber.split("").reverse();
    //console.log(reverNumber);

    let sumaTotal = 0;
    for(let i = 0; i < length; i++){
      let newNumber = parseInt(reverNumber[i]);

      if(i % 2 !==0){
        newNumber = newNumber * 2
        if(newNumber > 9){

          newNumber = newNumber - 9;
          //console.log(newNumber);
        }
      }
      sumaTotal = sumaTotal + newNumber;
      //console.log(sumaTotal);
    }
    return(sumaTotal % 10) === 0;
  },
  maskify:(creditCardNumber) => {
    return creditCardNumber.replace(/.(?=.{4})/g, "#");
  }
  
}

export default validator;


