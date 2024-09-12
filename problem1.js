function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || expenses>income){
        return "Invalid Input";
    }
    let profit=income-expenses;
     const taxt=profit*0.2;
     return taxt;
   
}
console.log(calculateTax(1000));
