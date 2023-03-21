const myForm = document.querySelector("#myForm");
const employeeName = document.querySelector("#name");
const employeeEmail = document.querySelector("#email");
const errorMsg = document.querySelector("#error-msg");
const myList = document.querySelector("#myList");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(employeeName.value === '' || employeeEmail.value === '')
    {
        //alert user to fill all fields
        errorMsg.classList.add("error");
        errorMsg.innerHTML = "Please fill all fields.";

        //remove error message
        setTimeout(() => errorMsg.remove(), 3000);
    } else
    {   //add employee details to list
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${employeeName.value}: ${employeeEmail.value}`));
        myList.appendChild(li);
    }

    //clear fields
    employeeName.value = '';
    employeeEmail.value = '';
}
