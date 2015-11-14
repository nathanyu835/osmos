window.onload = function() {
    var user = Parse.User.current();
    if (!user) {
        $("#registration-form #submit").click(function() {
            registerUser();
        });
        $("#login-form #submit").click(function() {
           loginUser(); 
        });
    }
    else {
       window.location.href = "../pages/dashboard.html";
    }
};

function registerUser() {
    var user = new Parse.User();
    var username = $("#registration-form #username").val();
    var password = $("#registration-form #password").val();
    var groups = [];
    var confirmPassword = $("#registration-form #confirmPassword").val();
    
    if (password != confirmPassword) {
        alert("Your passwords don't match! Please try again.");
        return false;
    }
    
    user.set("username", username);
    // probably hash and salt this later
    user.set("password", password);
    user.set("groups", groups);
    user.signUp(null, {
        success: function(user) {
            window.location.href = "../pages/interests.html";
        },
        error: function(user, error) {
            // error message here
        }
    });
}

function loginUser() {
    var username = $("#login-form #username").val();
    // needs comparison like password_verify in PHP
    var password = $("#login-form #password").val();
    var user = Parse.User.logIn(username, password, {
        success: function(user) {
            window.location.href = "../pages/dashboard.html";
        },
        error: function(user, error) {
            // error message here
        }
    });
}
