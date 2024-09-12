// Output:foyshalsk348@gmail.com

function sendNotification(email){

   if(email.indexOf("@")===-1){
    return "Invalid Email";
   }
 let str1=email.split("@")[0];
 let str2=email.split("@")[1];
 return str1+" sent you an email from "+str2;
}

console.log(sendNotification("foyshal@gmail.com"));
