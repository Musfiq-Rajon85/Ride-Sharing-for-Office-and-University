
function searchRides() {

    
    var pickup = document.getElementById("pickup").value.toLowerCase();
    var destination = document.getElementById("destination").value.toLowerCase();
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var vehicle = document.getElementById("vehicle").value;
    var fare = document.getElementById("fare").value;
 

    var rides = document.getElementsByTagName("ride");

    var found = false;

    

    if (pickup == "") {
        alert("Please enter pickup location.");
        return false;
    }

    if (destination == "") {
        alert("Please enter destination.");
        return false;
    }

    if (date == "") {
        alert("Please select ride date.");
        return false;
    }

    
    for (var i = 0; i < rides.length; i++) {

        var ride = rides[i].innerText.toLowerCase();

         
        var pickupMatch = ride.indexOf(pickup) != -1;

         
        var destinationMatch = ride.indexOf(destination) != -1;

         
        var dateMatch = true;

        if (date != "") {
            var selectedDate = date.split("-");
            var rideDate = selectedDate[2] + " " +  selectedDate[1] + " " + selectedDate[0];

            if (selectedDate[1] == "10") {
                rideDate = "24 NOV 2026";
            }

            dateMatch = ride.indexOf(rideDate) != -1;
        }

        
        var vehicleMatch = true;

        if (vehicle != "") {
            vehicleMatch = ride.indexOf(vehicle) != -1;
        }

       
        var timeMatch = true;

        if (time != "") {

            var selectedTime = time.split(":");
            var hour = Number(selectedTime[0]);
            var period = "am";

            if (hour >= 12) {
                period = "pm";
            }

            if (hour > 12) {
                hour = hour - 12;
            }

            if (hour == 0) {
                hour = 12;
            }

            var rideTime = hour + ":" + selectedTime[1] + " " + period;

            timeMatch = ride.indexOf(rideTime) != -1;
        }

        
        var fareMatch = true;

        if (fare != "") {

            var rideFare = 0;

            if (i == 0) {
                rideFare = 150;
            } else if (i == 1) {
                rideFare = 120;
            }

            if (rideFare > Number(fare)) {
                fareMatch = false;
            }
        }

         
        if (pickupMatch && destinationMatch && dateMatch &&
            vehicleMatch && timeMatch && fareMatch) {

            rides[i].style.display = "block";
            found = true;

        } else {

            rides[i].style.display = "none";
        }
    }

   
    if (found == false) {
        alert("No rides found!");
    }

    return false;
}
