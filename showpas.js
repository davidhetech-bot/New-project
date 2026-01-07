let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "eye.png"; // Change to open eye icon
    } else {
        password.type = "password";
        eyeicon.src = "eye-closed.png"; // Change to closed eye icon
    }
}