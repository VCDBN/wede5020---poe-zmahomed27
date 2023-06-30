//function to validate the form
//the event function is what allows user input interactions

function validateForm(event){
    event.preventDefault(); 
    //this does not allow the form to be submitted without data

//fetch data from the inputs on the form

var name = document.getElementById('name').value;
var email = document.getElementById('email').value;


//clearing previous errors
document.getElementById('nameError').textContent = '';
document.getElementById('emailError').textContent = '';

//validating name field 
if (name === '') {
    document.getElementById('nameError').textContent = 'please enter your name'
    return;
}

//validating email field 
if (email === '') {
    document.getElementById('emailError').textContent = 'please enter your email'
    return;
}


//display success message
alert('Form submitted successfully!');

}

var form = document.getElementById('regForm');
form.addEventListener('submit', validateForm);