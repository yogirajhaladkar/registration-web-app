async function loginUser(event) {

    
    event.preventDefault();

    let username = document.querySelector("input[name='username']").value;
    let password = document.querySelector("input[name='password']").value;

    try {
        const response = await fetch("http://127.0.0.1:8000/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login successful!");
        } else {
            alert(data.detail);
        }

    } catch (error) {
        alert("Server not reachable");
    }
}