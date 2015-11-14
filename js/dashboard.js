window.onload = $(function() {
    var user = Parse.User.current();
    if (!user) {
        window.location.href = "../pages/index.html";
    }
    welcome(user);
    assignments(user);
    groups(user);
    $("#tabs").tabs();
    $("#logout").click(function() {
        Parse.User.logOut();
        window.location.href = "../pages/index.html";
    });
});

function welcome(user) {
    user.fetch().then(function(info) {
        $("#welcome").html("Welcome to " + info.get("school") + ", " + info.get("username")); 
    });
}

function assignments(user) {
    user.fetch().then(function(info) {
        var assignments = info.get("assignments");
        if (!assignments) {
            $("#assignments").append("It looks like you don't have any assignments!");
        }
        else {
            for (var i in assignments) {
                $("#assignments").append(assignments[i]);
            }
        }
    });
}

function groups(user) {
    user.fetch().then(function(info) {
       var groups = info.get("groups");
       if (!groups) {
           $("#groups").append("It looks like you don't have any groups!");
       }
       else {
           for (var i in groups) {
                $("#groups").append(groups[i]);   
           }
       }
    });
}

function createGroup(user) {
    var groupName = $("#group-create-form #groupName").val();
    var groupType = $("input[name='groupType']:checked").val();
    var groupInfo = [groupName, groupType];
}
