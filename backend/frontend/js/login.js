const togglePassword=document.getElementById("togglePassword");

const password=document.getElementById("password");

togglePassword.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

togglePassword.classList.remove("bi-eye-fill");

togglePassword.classList.add("bi-eye-slash-fill");

}else{

password.type="password";

togglePassword.classList.remove("bi-eye-slash-fill");

togglePassword.classList.add("bi-eye-fill");

}

});

const form=document.getElementById("loginForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const response=await fetch("http://3tier-backend-env-env-1.eba-vnynmyid.ap-south-1.elasticbeanstalk.com/api/auth/login",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})

});

const data=await response.json();

if(data.success){

localStorage.setItem("token",data.token);

alert("Login Successful");

window.location.href="dashboard.html";

}else{

alert(data.message);

}

});