const signupFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // What code do I need to use to add the signup data to the database?
    if (email && password) {
        // Send the e-mail and password to the server
        /*  const response = await fetch('/api/users/login', {
             method: 'POST',
             body: JSON.stringify({ email, password }),
             headers: { 'Content-Type': 'application/json' },
         }); */

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
