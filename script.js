const form = document.querySelector("form")
const inputFields = document.querySelectorAll('.input-group > input');

const inputElements = (field) => {
    return {
        field: field,
        errorIcon: field.nextElementSibling,
        flashMessage: field.nextElementSibling.nextElementSibling
    }
}


form.addEventListener('submit',(e) => {
    let error = false;
    const fields = ["first-name","last-name","email","password"]
    let fieldElement;
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!((emailField = document.getElementById('email')).value.match(emailformat))) {
        let {field, errorIcon, flashMessage} = inputElements(emailField)


        field.classList.add('error-field');
        errorIcon.style.display = "block";
        flashMessage.textContent = "Looks like this is not an email";
        error = true;
    }

    fields.forEach(field => {
        if ((fieldElement = document.getElementById(field)).value.length === 0) {
            let {field, errorIcon, flashMessage} = inputElements(fieldElement)
            field.classList.add('error-field');
            errorIcon.style.display = "block";
            flashMessage.textContent = fieldElement.getAttribute("placeholder") + " cannot be empty"

            error = true;
        }
    })

    if (error) {
        e.preventDefault();
    }



})



inputFields.forEach(field => {
    field.addEventListener('focus', function() {
        let {errorIcon, flashMessage} = inputElements(this)

        this.classList.remove('error-field');
        errorIcon.style.display = "none";
        flashMessage.textContent = "";
    })
})