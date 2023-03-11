
function onLoad(){
    const status = localStorage.getItem("status");
    if(status === "login"){

        const login = document.getElementById("loginHome");
        login.classList.add("active");
    }
    else{
        const register = document.getElementById("registerSection");
        register.classList.add("active");
    }
}

function login(){
    const user_local = localStorage.getItem("account_name");
    const pass_local = localStorage.getItem("account_password");

    const user_session = localStorage.getItem("account_name");
    const pass_session = localStorage.getItem("account_password");

    const user_login = document.getElementById("email_login").value;
    const pass_login = document.getElementById("password_login").value;
    
    if(user_local === user_login && pass_local === pass_login){

        window.location = "http://127.0.0.1:5500/assets/janshop.html";
        return;
    }

    if(user_session === user_login && pass_session === pass_login){

        window.location = "http://127.0.0.1:5500/assets/janshop.html";
        return;
    }
    alert("Wrong email or password");
}

function setLogin(){
    localStorage.setItem("status", "login");
}

function setRegister(){
    localStorage.setItem("status", "register");
}