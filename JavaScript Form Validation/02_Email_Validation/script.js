function validateemail()  
{  
let x=document.myform.email.value;  
let atposition=x.indexOf("@gmail");  
let dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address ");  
  return false;  
  }  
  else{
    alert("Yes, It's a valid email address")
  }
}  