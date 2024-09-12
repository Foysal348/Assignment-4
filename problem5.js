function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !=="number" || serialNumber<waitingTimes.length){
        return "Invalid Input";
    }
    let sum=0;
for(let i=0;i<waitingTimes.length;i++)
{
sum=sum+waitingTimes[i];
}
const average=Math.round (sum/waitingTimes.length);
const totalWaitingTime=(serialNumber-1-waitingTimes.length)*average;
return totalWaitingTime;

  
}
console.log(waitingTime());

