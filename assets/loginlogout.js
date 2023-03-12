
function onLoad(){
    const status = localStorage.getItem("status");
    localStorage.setItem("account_name","admin@gmail.com");
    localStorage.setItem("account_password","123");

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

    const user_session = sessionStorage.getItem("account_name");
    const pass_session = sessionStorage.getItem("account_password");

    const user_login = document.getElementById("email_login").value;
    const pass_login = document.getElementById("password_login").value;
    
    if(user_local === user_login && pass_local === pass_login){

        window.location = "http://127.0.0.1:5500/assets/janshop.html";
        sessionStorage.setItem("account_active", "admin");
        return;
    }

    if(user_session === user_login && pass_session === pass_login){

        window.location = "http://127.0.0.1:5500/assets/janshop.html";
        sessionStorage.setItem("account_active", user_session); 
        return;
    }
    alert("Wrong email or password");
}

function register(){

    const name = String(document.getElementById("name_reg").value);
    const email = String(document.getElementById("email_reg").value);
    const pass = String(document.getElementById("pass_reg").value);
    const re_pass = String(document.getElementById("re_pass_reg").value);

    console.log(email, email.indexOf("@"), email.lastIndexOf("."));
    if(email.indexOf("@") < 1 || email.indexOf("@") + 2 > email.lastIndexOf(".") || email.lastIndexOf(".") + 2 >= email.length){
        alert("Wrong email");
        return;
    }
    if(pass !== re_pass || pass === ""){
        alert("Password wrong");
        return;
    }

    setLogin();
    sessionStorage.setItem("account_name", email);
    sessionStorage.setItem("account_password", pass);
    window.location = "http://127.0.0.1:5500/assets/loginlogout.html";
}

function setLogin(){
    localStorage.setItem("status", "login");
}

function setRegister(){
    localStorage.setItem("status", "register");
}

function userActive(){
    const acc = sessionStorage.getItem("account_active");
    const ul = document.getElementById("actChild");
    console.log(acc);
    if(acc === null){
        const child = `<li onclick="setLogin()"><a href="./loginlogout.html">Đăng nhập</a></li>
        <hr>
        <li onclick="setRegister()"><a href="./loginlogout.html">Đăng ký</a></li>`
        ul.innerHTML = child;
    }
    else{
        const child = `<li><p>${acc}</p></li>
        <hr>
        <li><p>Log out</p></li>`
        ul.innerHTML = child;
    }
}