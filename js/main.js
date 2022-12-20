var userNAme=document.getElementById("userInputName");
var userEmail=document.getElementById("userInputEmail");
var userPassword=document.getElementById("userInputPassword");
var AllUsersData=[];
let username=localStorage.getItem("username")
if(localStorage.getItem("allusersdata")!=null){
    AllUsersData=JSON.parse( localStorage.getItem("allusersdata"));
}
// ==================signup =================================================
function signup(){
    validuserinputs();
    isexist();
   if(validuserinputs()==true&& isexist()==false){
    var userData={
        name:userNAme.value,
        email:userEmail.value,
        password:userPassword.value
    }
    AllUsersData.push(userData);
    localStorage.setItem("allusersdata",JSON.stringify(AllUsersData));
    document.getElementById("confirmmsg").classList.replace("d-none","d-block");
    document.getElementById("confirmbtn").classList.replace("d-none","d-inline");
   }
}
// ===================================validation================================
function validusername(){
    var usernameinput=userNAme.value;
    var usernamealert=document.getElementById("usernameAlert")
    var usernameregex=/^[a-zA-Z]{3,10}$/;
    if( usernameregex.test(usernameinput)==true&& usernameinput!=""){
        userNAme.classList.add("is-valid");
        userNAme.classList.remove("is-invalid");
        usernamealert.classList.replace("d-block","d-none");
        return true;
    }
    else{
        userNAme.classList.add("is-invalid");
        userNAme.classList.remove("is-valid");
        usernamealert.classList.replace("d-none","d-block");
        return false;
    }
   
}
function validEmail(){
    var emailAlert=document.getElementById("emailAlert");
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    if(regEmail.test(userEmail.value) && userEmail.value!=""){
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        emailAlert.classList.replace("d-block","d-none");
        return true;
    }
    else{
       userEmail.classList.add("is-invalid");
       userEmail.classList.remove("is-valid");
       emailAlert.classList.replace("d-none","d-block");
       return false;
    }
}
function validPassword(){
    let passAlert=document.getElementById("passwordlAlert");
    let passwordRegex = /^.{5,15}$/;
    if(passwordRegex.test(userPassword.value) && userPassword.value!=""){
      userPassword.classList.add("is-valid");
      userPassword.classList.remove("is-invalid");
      passAlert.classList.replace("d-block","d-none");
        return true;
    }
    else{
     userPassword.classList.add("is-invalid");
     userPassword.classList.remove("is-valid");
     passAlert.classList.replace("d-none","d-block");
       return false;
    }
}
function validuserinputs(){
    validPassword();
    validEmail();
    validusername();
    if( validPassword() && validEmail () && validusername()){
        return true;
    }
    else{
        return false;
    }
}
// ===========================is exist===========================================
function isexist(){
   
    let emailExist=document.getElementById("emailExist");
    for (let i = 0; i < AllUsersData.length; i++) {
       if(AllUsersData[i].email.toLowerCase()==userEmail.value.toLowerCase()){
        emailExist.classList.replace("d-none","d-block");
        userEmail.classList.remove("is-valid");
        return true ;
       }  
    }
    emailExist.classList.replace("d-block","d-none");
    return false;


}
// ========================== login =========================================
function validLogin(){
   let userLoginEmail = document.getElementById("userLoginEmail");
   let userLoginPassword= document.getElementById("userLoginPassword");
   let fillMsg= document.getElementById("fillMsg");
   let wrongMsg= document.getElementById("wrongMsg");
   let loginButton=document.getElementById("loginButton");
   console.log( AllUsersData);
   if(userLoginEmail.value=="" || userLoginPassword.value==""){
    fillMsg.classList.replace("d-none","d-block");;
    return false;
   }
  
   
   for (let i = 0; i < AllUsersData.length; i++) {
   if (AllUsersData[i].email.toLowerCase()==userLoginEmail.value.toLowerCase()&&
      AllUsersData[i].password==userLoginPassword.value) {
        localStorage.setItem("username",AllUsersData[i].name)
        loginButton.setAttribute("href","index.html");
       
    }
    else{
        wrongMsg.classList.replace("d-none","d-block");
    }
   }
}
function getUserName(){
  document.querySelector(".welcomeName").innerHTML= "welcome" +" "+username;
}
function logout() {
    localStorage.removeItem("allusersdata")
}
