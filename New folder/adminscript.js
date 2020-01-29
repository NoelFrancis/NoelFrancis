$(document).ready(function () {

    var data_index;
    var users = [
      
    ]
    
    var populateUsersToTable = function (users) {
        var rows = '';
        $.each(users, function (index, val) {
            rows += "<tr><td>" + val.firstname + "</td>" +
                "<td>" + val.lastname + "</td>" +
                "<td>" + val.email + "</td>" +
                "<td>" + val.birth + "</td>" +
                "<td>" + val.gender+ "</td>" +
                "<td>" + val.password + "</td>" +
             
                "<td>" + "<button class='deleteFunction' value='" + val.id + "'>Delete</button>" + "<button class='editFunction' value='" + val.id + "'>Edit</button>" + "</td>"
            "</tr>";
        });
        $(rows).appendTo("#items table tbody");

    };
    var emptyTable = function () {
        $("#items table tbody").html('');
    }
    var check2 = false;
    var check = false;
    populateUsersToTable(users); // add initial data to table
    $("#login").click(function () {
        // contain the value of inputs
        chkBlankandRepeatData();
        if (check == true) {
            alert("Inputed data is already in the system.");
            check = false;
        }
        else if (check2 == true) {
            alert("Fill all required fields.");
            check2 = false;
        }
        else {
            var user = {
                id: users.length + 1,
                firstname: $('#txtname').val(),
                lastname: $('#txtlname').val(),
                email: $('#txtnum').val(),
                birth: $('#Month'+'#Day'+'#Year').val(),
                gender: $('#radio').val(),
                password: $('#txtpass2').val()
            }
            users.push(user); // add user to list
            populateUsersToTable([user]); // add data to table
            var key;
            for (var i = 0; i < users.length; i++) {
                key = "user" + i;
            }
            window.localStorage.setItem(key, JSON.stringify(user));
            clearFunction();
        }

    });

    function chkBlankandRepeatData() {
        var user = {
            id: users.length + 1,
                firstname: $('#txtname').val(),
                lastname: $('#txtlname').val(),
                email: $('#txtnum').val(),
                birth: $('#Month'+'#Day'+'#Year').val(),
                gender: $('#radio').val(),
                password: $('#txtpass2').val()
        }
        for (var i = 0; i < users.length; i++) {
            if (user.firstname == users[i].firstname && user.lastname == users[i].lastname && user.email == users[i].email && user.birth == users[i].birth && user.gender == users[i].gender && user.password==users[i].password) {
                check = true;
            }
        }
        if (user.firstname == "" || user.lastname == "" || user.email == "" || user.birth == "" || user.gender == "" || user.password=="") {
            check2 = true;
        }
    }

    function clearFunction() {
        $("#txtname").val("");
        $("#txtlname").val("");
        $("#txtnum").val("");
      
      
        $("#txtpass2").val("");
    }
    $("html").on('click', '.deleteFunction', function () {
        if (confirm("Are you sure you want to delete this?")) {
            var id = $(this).val();
            var index = users.findIndex(function (user) {
                return user.id == id;
            })
            if (index !== -1) users.splice(index, 1);
            emptyTable();
            populateUsersToTable(users);
        }
        var indexshit;
        $("html").on('click', '.editFunction', function () {
            var id = $(this).val();
            var index = users.findIndex(function (user) {
                return user.id == id;
            })
            indexshit = index;
            // $("#myModa   l").modal();
            $.each(users, function (ind, val) {
                if (ind === index) {
                    $("#txtname").val(val.firstname);
                    $("#txtlname").val(val.lastname);
                    $("#txtnum").val(val.email);                    
                    $("#txtpass2").val(val.password);                    
                }                   
            });
        });
    });
    
    $("#home").click(function () {
        location.replace("Login.html");
    });
});