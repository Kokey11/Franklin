function login(){
    let email, password;
    email = document.getElementById("username").value;
    password = document.getElementById("password").value;
    
    let users = new Array();
    users = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(users.some((v)=>{
        return v.email == email && v.password == password
    })){
        alert("Login Successful");
        let user = users.filter((v)=>{
            return v.email == email && v.password == password;
        })[0]

        localStorage.setItem("name", user.name);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
        window.location.href = "index2.html";

    }
    else{
        alert("Login Fail");
    }
}