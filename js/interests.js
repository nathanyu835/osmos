window.onload = function() {
    var user = Parse.User.current();
    console.log(user.id);
    var id = user.id;
    
    
    if (user.get("interests")) {
        window.location.href = "../pages/dashboard.html";
    }
    
    $("#interests-form #submit").click(function() {
        setInterests(user);
        window.location.href = "../pages/dashboard.html";
    });
}

function setInterests(user) {
    console.log(user);
    var school = $("#interests-form #school").val();
    user.set("school", school);
    var course = $("#interests-form #course").val();
    user.set("course", course);
    var address = $("#interests-form #address").val();
    user.set("address", address);
    return user.save();
}
