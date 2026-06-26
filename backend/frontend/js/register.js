const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try{

        const response = await fetch(

            "http://3tier-backend-env-env-1.eba-vnynmyid.ap-south-1.elasticbeanstalk.com/api/auth/register",

            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    name,
                    email,
                    password

                })
            }

        );

        const data = await response.json();

        alert(data.message);

        if(data.success){

            window.location.href =
            "login.html";

        }

    }

    catch(error){

        console.log(error);

        alert("Something went wrong");

    }

});