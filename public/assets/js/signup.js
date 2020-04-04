$(document).ready(function() {
    var signUpForm = $("form.signup");
    var firstInput = $("input#firstname");
    var lastInput = $("input#lastname");
    var usernameInput = $("input#username");
    var passwordInput = $("input#password");
  
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        firstname: firstInput.val().trim(),
        lastname: lastInput.val().trim(),
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (userData.firstname || userData.lastname || !userData.username || !userData.password) {
        return;
      }

      signUpUser(userData.firstname, userData.lastname, userData.username, userData.password);
      firstInput.val("");
      lastInput.val("");
      usernameInput.val("");
      passwordInput.val("");
    });
  
    function signUpUser(firstname, lastname, username, password) {
      $.post("/api/signup", {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password
      })
        .then(function(data) {
          window.location.replace("/members");
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  