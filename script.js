document.getElementById("signupForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        message.style.color = "red";
        message.innerHTML = "Please fill all fields";
    }
    else if (!email.includes("@")) {
        message.style.color = "red";
        message.innerHTML = "Invalid Email";
    }
    else if (password !== confirmPassword) {
        message.style.color = "red";
        message.innerHTML = "Passwords do not match";
    }
    else {
        let user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        message.style.color = "green";
        message.innerHTML = "Signup Successful!";
    }
});