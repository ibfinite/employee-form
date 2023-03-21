const myForm = document.querySelector("#myForm");
const employeeName = document.querySelector("#name");
const employeeEmail = document.querySelector("email");
const errorMsg = document.querySelector("error-msg");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
 
    if(employeeName.value === '' || employeeEmail.value === '')
    {
        errorMsg.classList.add("error-msg");
        errorMsg.innerHTML = "Please fill all fields.";
    }
}
