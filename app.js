function myform(){

    // USER NAME
        
    let b=/^[A-Za-z]+$/;
    let a=document.getElementById("username").value;


    if(a==""){
       innerHTML=alert(" PLEASE GUYS ENTTRE YOUR NAME")
        return false;
    }
    if(a.match(b)){
        true;
    }else{
     innerHTML=alert("PLEASE ENTRE ONLY NAME NOT NUMBER ")
     return false;
    }

    //  PHONE NUMBER 

    let t=document.getElementById("Pnumber").value;

    if(t==" "){
        innerHTML=alert("Entre your phone number")
        return false;
    }
     
    if(t.length==10){
        true;
    }else{
        innerHTML=alert("Entre valid number")
        return false;
    }


     //  ADDRESS

     let d=document.getElementById("Address").value;
     let q=/^[1-9-0A-Za-z]+$/;
    
     if(d==""){
         innerHTML=alert("Entre your Address");
         return false;
     }


     
    // EMAIL

    let c=document.getElementById('uemail').value;
    
      if(c==''){
        innerHTML=alert("Entre your email ID")
        return false;
    }
    
    // license
       
    // let k=document.getElementById("license").value;

    // if(k==16){
    //      true
    // }else{
    //     innerHTML=alert("Write correct lic number")
    //     return false;
    // }


    // PASSWORD

    let o=document.getElementById("password").value;

    if(o==" "){
        innerHTML=alert("Entre your password")
        return false;
    }
    
    if(o.length<8){
        innerHTML=alert("Password length is grater than 8")
    }


    let l=document.getElementById("cpassword").value;

    if(l.match(o)){
        true;
    }else{
        innerHTML=alert("Your Password is not match")
        return false;
    }
 


}


