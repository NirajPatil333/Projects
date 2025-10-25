document.getElementById('toggle-btn').addEventListener('click' , function() {
    const loginForm = document.getElementById('login-form') ;
    const signupForm = document.getElementById('sign-up form') ;
    const btn = this;

    if (loginForm.style.display !== 'none'){
        loginForm.style.transform ='translateX(-100%)';
        setTimeout( () => {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            loginForm.style.transform = 'translateX(0)';
        }, 250);
        btn.textContent = 'Already have an account? Login';
    }
    else {
        signupForm.style.transform ='translateX(-100%)';
        setTimeout( () => {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
            signupForm.style.transform = 'translateX(0)';
        }, 250);
        btn.textContent = 'Don\'t have an account? Sign Up';
    }
});