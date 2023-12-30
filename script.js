// wait for the page to load
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        // cancle the default submit 
        event.preventDefault();
        // hide the form
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('sorry-msg').style.display = 'block';
    });
});
