const myForm = document.querySelector("#form");
const employeeName = document.querySelector("#name");
const employeeEmail = document.querySelector("email");
const errorMsg = document.querySelector("error-msg");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    if(employeeName.value === '' || employeeEmail.value === '')
    {
        errorMsg.classList.add("error-msg");
        errorMsg.innerHTML = "Please fill all fields.";
    }
}
