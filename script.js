function verify(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username)
    
    const user = "guruprasath"
    const pass = "12345"


    if (username==user && password==pass){
        alert("login Successful")
    }else{
        alert("login failed")
    }
    // You can add your login authentication code here
};