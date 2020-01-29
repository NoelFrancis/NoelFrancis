
$(document).ready(function () {

    $("#sign").click(function () {

        var type = prompt("Sign Up as Admin or User? Input selected user type below");
        if (type === "admin" || type === "Admin") {
            var question = prompt("What is the secret number?");
            if (question === "4") {
                
                alert("Signed up as ADMIN")
                

            }
            else {
                alert("ERROR!")
            }

        }
        else if (type === "user" || type === "User") {
            alert("Signed up as USER")
        }

    });
$("#login").click(function(){

    location.replace("admin.html");
});


});

