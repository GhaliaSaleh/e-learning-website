document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.querySelector('#loginBtn');
  const loginForm = document.querySelector('#login-form');
  const submitBtn = document.querySelector('#login-form input[type="submit"]');
  const logoutBtn = document.querySelector('#logoutBtn');

  loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block';
  });

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === 'Ghalia' && password === '123') {
      window.location.href = 'dashboard.html';
    } else {
      alert('Incorrect username or password!');
    }
  });

  var loginFormContainer = document.getElementById("login-form-container");
  var closeButton = document.getElementById("close");

  closeButton.onclick = function() {
    loginFormContainer.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == loginFormContainer) {
      loginFormContainer.style.display = "none";
    }
  }
});

logoutBtn.addEventListener('click', () => {
  window.location.href = 'home.html';
});



