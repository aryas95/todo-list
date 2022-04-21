const form = document.getElementById("form");
let username = document.getElementById("username");
let pwd = document.getElementById("password");

function validate(redirect){
   
      if(username.value.trim()==="")
    {
        alert("username cannot be empty");
        return false;
    }
    
    else if(pwd.value.trim()===""){
        alert("password cannot be empty");
        return false;
    }
   
    else{
        redirect();
    }
}
function redirect(){

    if(username.value!=="admin" || pwd.value!=="12345")
    {
        alert("incorrect username or password");
        return false; 
    }
    else{
        
        return validate();
    }
}
form.addEventListener('submit',function(event){
    if(!validate(redirect))
    {
        event.preventDefault();
    }
    
})