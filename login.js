const loginSubmit=document.getElementById('login-submit');


loginSubmit.addEventListener('click',()=>{

    const userEmail=document.getElementById('user-email');
    const emailField=userEmail.value;
    const userPassword=document.getElementById('user-password')
    const passwordFiled=userPassword.value;

    if(emailField=='jennifer@gmail.com' && passwordFiled=='123qaz'){
        window.location.href = "./profile.html";
    }else{
        alert('Wrong User id or password')
    }
})