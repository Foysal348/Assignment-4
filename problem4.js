function calculateFinalScore(obj) {
    if(typeof obj.name !=="string" || typeof obj.testScore !=="number" 
        || typeof obj.schoolGrade !=="number" || 
        typeof obj.isFFamily !=="boolean"
        || obj.testScore>50 || obj.schoolGrade>30){
        return "Invalid Input";
    }
    let marks=obj.testScore+obj.schoolGrade;
    if(obj.isFFfamily===true){
        marks=+20;
      
    }
    if(marks>=80){
        return true;
    }
    else
    {
        return false;
    }
    
}
const person={
    name:"Rajib",
    testScore:45,
    schoolGrade:25,
    isFFamily:true


}

console.log(calculateFinalScore(person));
