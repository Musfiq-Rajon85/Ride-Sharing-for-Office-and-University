
function searchUsers() {

    // Get the values from the form
    var search = document.getElementById("search").value.toLowerCase();
    var role = document.getElementById("role").value;
    var status = document.getElementById("status").value;

    // Get the place where we show the error message
    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    // Get all registered users
    var table = document.getElementById("usersTableBody");
    var rows = table.getElementsByTagName("tr");

    var found = false;

    // Check each user one by one
    for (var i = 0; i < rows.length; i++) {

        var name = rows[i].getElementsByTagName("td")[1].innerHTML.toLowerCase();
        var email = rows[i].getElementsByTagName("td")[2].innerHTML.toLowerCase();
        var userRole = rows[i].getElementsByTagName("td")[4].innerHTML.toLowerCase();
        var userStatus = rows[i].getElementsByTagName("td")[5].innerHTML.toLowerCase();

        // Check search, role and status
        if ((name.indexOf(search) != -1 || email.indexOf(search) != -1) &&
            (role == "all" || userRole == role) &&
            (status == "all" || userStatus == status)) {

            rows[i].style.display = "";
            found = true;
        }
        else {
            rows[i].style.display = "none";
        }
    }

    if (found == false) {
        errorBox.innerHTML = "No users found.";
    }

    return false;
}


// Reset the search and show all users
function resetSearch() {

    // Get the place where we show the error message
    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    // Get all registered users
    var table = document.getElementById("usersTableBody");
    var rows = table.getElementsByTagName("tr");

    // Show all users one by one
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = "";
    }

}
