document.getElementById('to-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.form-container').style.transform = 'translateX(-50%)';
});

document.getElementById('to-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.form-container').style.transform = 'translateX(0)';
});
