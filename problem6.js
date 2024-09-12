function calculateFinalScore(obj) {

    if (typeof obj.name !== "string" || typeof obj.testScore !== "number"  || typeof obj.isFFamily !== "boolean"||typeof obj.schoolGrade !== "number" ||  obj.testScore > 50 || obj.schoolGrade > 30)
        return "Invalid Input";


    let score = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily == true) {
        score += 20;
    }
    if (score >= 80){
        return true;
    }
       
    else{
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