const submitFunction = (event) => {
    event.preventDefault()
    validateForm()
}

document.getElementById('form').addEventListener('submit', submitFunction);

function validateForm(){
    let textField = document.querySelectorAll('input[type="text"]');
    let correctValidation = true;

    textField.forEach(field => {
        let errorField = document.getElementById('error' + field.id.charAt(0).toUpperCase() + field.id.slice(1));
        if ((field.value.length) == ''){
            showError(errorField, 'Required field');
            correctValidation = false;
        } else if (field.value.length > 0 && field.value.length < 3) {
            showError(errorField, 'This field must be at least 4 characters long.')
            correctValidation = false
        } else {
            hideError(errorField)
        }

    });

    //esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // este regex valida que el formato del email se válido
        hideError(errorEmail)
    } else {
        showError(errorEmail, '¡Ingrese un correo electrónico válido!')
    }

    // Validación de edad

    const age = document.getElementById('age');
    const errorAge = document.getElementById('errorAge')

    if (age.value < 18) {
        showError(errorAge, 'You must be 18 or older to sign up!')
        correctValidation = false
    } else {
        hideError(errorAge)
    }


    const activity = document.getElementById('activity')
    const errorActivity = document.getElementById('errorActivity')

    if (activity.value == '') {
        showError(errorActivity, 'Por favor, selecciona una activity')
        correctValidation = false;
    } else {
        hideError(errorActivity)
    }

    const educationLevel = document.getElementById('educationLevel')
    const errorEducationLevel = document.getElementById('errorEducationLevel')

    if (educationLevel.value == '') {
        showError(errorEducationLevel, 'Please, select an education level.')
        correctValidation = false;
    } else {
        hideError(errorEducationLevel)
    }

    const terms = document.getElementById('terms')
    const errorTerms = document.getElementById('errorTerms')

    if (!terms.checked) {
        showError(errorTerms, 'You must accept terms and conditions.')
        correctValidation = false
    } else {
        hideError(errorTerms)
    }

    return correctValidation

}

const showError = (element, message) => {
    element.textContent = message;
    element.style.display = 'block';
}

const hideError = (element) => {
    element.textContent = '';
    element.style.display = 'none';
}