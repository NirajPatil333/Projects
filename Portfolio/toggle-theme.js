const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener( 'click' , () => {
    body.classList.toggle('dark');
    toggleButton.textContent = body.classList.contains ('dark') ? '☀️' : '🌙' ;
    toggleButton.setAttribute('aria-label' , body.classList.contains('Dark')? 'Switch to light mode': 'switch to Dark mode');
});


