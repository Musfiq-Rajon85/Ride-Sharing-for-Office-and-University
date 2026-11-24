
function cancelRide() {

   
    var rideId = document.getElementById("ride-id").value;
    var reason = document.getElementById("reason").value;

   
    if (rideId == "") {
        alert("Please enter Ride ID.");
        return false;
    }

     
    if (reason == "") {
        alert("Please select a cancellation reason.");
        return false;
    }

    
    var confirmCancel = confirm("Are you sure you want to cancel this ride?");

    if (confirmCancel == false) {
        return false;
    }

    
    document.getElementById("rideStatus").innerHTML = "Cancelled";

    
    alert("Ride cancelled successfully!");

    return false;
}
