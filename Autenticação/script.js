
function validarFormulario(event) {
    event.preventDefault();

    const email = window.document.getElementById('email');
    const password = window.document.getElementById('password');
    const confirmPassword = window.document.getElementById('confirmPassword');

    const messageEmail = window.document.getElementsByClassName("message-email");
    const messagePassword = window.document.getElementsByClassName("message-password");
    const messagePasswordconfirm = window.document.getElementsByClassName("message-confirmpassword");
    const messageCheckpassword = window.document.getElementsByClassName("message-fields-pswd")

   

    if(email.value == '') {
        email.classList.add('error');
        messageEmail[0].classList.add('show-message');        
    }else {
        email.classList.remove("error");
        messageEmail[0].classList.remove('show-message');  
    } 


    if(password.value == '') {
        password.classList.add('error');
        messagePassword[0].classList.add('show-message');        
    }else {
        password.classList.remove("error");
        messagePassword[0].classList.remove('show-message');        

    } 

    if(confirmPassword.value == '') {
        confirmPassword.classList.add('error');
        messagePasswordconfirm[0].classList.add('show-message');        
    }

    if (!!password.value && !!confirmPassword.value && password.value != confirmPassword.value){
        messageCheckpassword[0].classList.add('show-message');

    }else {
        messageCheckpassword[0].classList.remove('show-message');
    }
}