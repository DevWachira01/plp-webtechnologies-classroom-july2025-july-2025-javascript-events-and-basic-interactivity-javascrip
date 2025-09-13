//Dark MODE
//select the toggle button
const toggleBtn= document.querySelector('.mode'); 

toggleBtn.addEventListener('click',togbtn);
   
function togbtn(e){
document.body.classList.toggle('dark-mode');
                                      
}
//FAQ SECTION 
document.addEventListener('DOMContentLoaded',() =>{

    const questions =document.querySelectorAll(".faq-question");
    questions.forEach(question =>{
        question.addEventListener("click", ()=>{
            question.classList.toggle("active");
            const answer =question.nextElementSibling;
            const icon =question.querySelector(".icon");
            if (answer.style.display == "block"){
                answer.style.display ="none";
                icon.textContent="+";
            }else{
                answer.style.display="block";
                icon.textContent ="-";

            }
        });
    });


});



//FORM VALIDATION

const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

form.addEventListener('submit',e =>{
    e.preventDefault();
    validateInputs();

});

const setError =(element,message) =>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText =message;
    inputControl.classList.add('error');
     inputControl.classList.remove('success');

    
}

const setSuccess= element=>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText= "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
//check whether email is Valid
const isValidEmail = email => {
    return /^\S+@\S+\.\S+$/.test(email);
};


const validateInputs = ()=>{
    const usernameValue= username.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();
    const password2Value= password2.value.trim();

    if(usernameValue ===""){
        setError(username,"Username is Required");
    }
    else{
        setSuccess(username);

    }
    if(emailValue ===''){
        setError(email, "Email is required");

    }else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    }
    
    else{
        setSuccess(email);
        
    }
    if(passwordValue===""){
        setError(password, "password is required");

    }else if(passwordValue.length<8){
        setError(password,"password must be at least 8 characters");
    }
    
    else{
        setSuccess(password);

    }
    if(password2Value ===""){
        setError(password2, " please confirm your password");
    }else if (password2Value !== passwordValue)
        {
        setError(password2,"password doesn't match");
    }
    
    else{
        setSuccess(password2); 
    }

};



