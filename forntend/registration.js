function clearerror() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}


function seterror(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}


function validateForm() {
webkitURL 
    let returnval = true;
    clearerror();

    let name = document.querySelector("input[name='username']").value;
    let pass = document.querySelector("input[name='password']").value;
    let repass = document.querySelector("input[name='confirm_password']").value;

    if (name.length < 5) {
        seterror("username", "Username must be at least 5 characters");
        returnval = false;
    }

    if (pass.length < 8 || pass.length > 16) {
        seterror("password", "Password must be between 8-16 characters");
        returnval = false;
    }

    if (pass !== repass) {
        seterror("confirm_password", "Passwords do not match");
        returnval = false;
    }

    return returnval;
}



async function handleRegister(event) {

    event.preventDefault();  

  
    if (!validateForm()) {
        return;
    }

    let username = document.querySelector("input[name='username']").value;
    let email = document.querySelector("input[name='email']").value;
    let password = document.querySelector("input[name='password']").value;

    try {
        const response = await fetch("http://127.0.0.1:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Registration successful!");
            window.location.href = "login.html";
        } else {
            alert(data.detail);
        }

    } catch (error) {
        alert("Server not reachable");
    }
}
