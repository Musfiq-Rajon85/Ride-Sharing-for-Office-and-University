
function bookSeat() {

     
    var seats = document.getElementById("seats").value;
    var requestDate = document.getElementById("request-date").value;

    
    var availableSeats = 3;
    var farePerSeat = 150;

     
    if (seats == "") {
        alert("Please enter number of seats.");
        return false;
    }

    if (Number(seats) < 1) {
        alert("Please book at least 1 seat.");
        return false;
    }

    if (Number(seats) > availableSeats) {
        alert("Only 3 seats are available.");
        return false;
    }

    
    if (requestDate == "") {
        alert("Please select request date.");
        return false;
    }

    
    var totalFare = Number(seats) * farePerSeat;

    
    document.getElementById("totalFare").innerHTML = totalFare + " BDT";

    
    alert("Booking successful!");

    return false;
}


 
function calculateFare() {

    var seats = document.getElementById("seats").value;

    var farePerSeat = 150;

    var totalFare = Number(seats) * farePerSeat;

    document.getElementById("totalFare").innerHTML = totalFare + " BDT";
}
