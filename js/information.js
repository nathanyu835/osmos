window.onload = function() {
    var user = Parse.User.current();
    if (!user) {
        window.location.href = "../pages/index.html";
    }
    user.fetch().then(function(info) {
        if (info.get("school")) {
            getInterests(info);
            $("#information-form #submit").click(function() {
                setInterests(user);
                window.location.href = "../pages/dashboard.html";
            });
        }
        else {
            $("#information-form #submit").click(function() {
                setInterests(user);
                window.location.href = "../pages/dashboard.html";
            });
        }
    });
}

function setInterests(user) {
    var school = $("#information-form #school").val();
    user.set("school", school);
    var course = $("#information-form #course").val();
    user.set("course", course);
    var address = $("#information-form #address").val();
    user.set("address", address);
    return user.save();
}

function getInterests(info) {
    var school = info.get("school");
    $("#information-form #school").val(school);
    var course = info.get("course");
    $("#information-form #course").val(course);
    var address = info.get("address");
    $("#information-form #address").val(address);
}
