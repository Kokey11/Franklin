function register(){
    let name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    password_confirmation = document.getElementById("password").value;

    let users = new Array();
    users = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(users.some((v)=>{
        return v.email == email
    })){
        alert("Email already used!");
    }
    else{
        users.push({
            "name":name,
            "email": email,
            "password": password
        })
        localStorage.setItem("users", JSON.stringify(users));
        alert("Register Successfully");
        window.location.href = "login.html";
    }

}