
//form control start
const form = document.getElementById('form');
const username = document.getElementById('username');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

// show error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success';
}
//Email validation
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }
    else{
        showError(input, 'Email is valid');
    }
}

//check required
function checkRequired(inputArr){
 inputArr.forEach(function(input){
     if(input.value.trim()===''){
         showError(input, `${getFieldName(input)} is required`);
     }
     else{
         showSuccess(input);
     }
 })
}
//check input lengh
function checkLength(input, min, max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    } 
    else if(input.value.lengh < max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }
    else{
        showSuccess(input)
    }

} 

// get field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//check password maching
function checkPasswordsMatch(input1, input2){
    if(input1.value!==input2.value){
        showError(input2,'passwords do not match');
    }
}

// even listeners
form.addEventListener('submit',function(e){
   e.preventDefault();
   
 checkRequired([username,email,password,confirm]);
 checkLength(username, 3, 15);
 checkLength (password, 8, 25);
 checkEmail(email);
 checkPasswordsMatch(password,confirm);

}); 