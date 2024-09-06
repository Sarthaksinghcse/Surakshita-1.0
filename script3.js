let map, directionsService, directionsRenderer;

function initMap() {
    // Initialize Google Map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.0522, lng: -118.2437},  // Example: Los Angeles
        zoom: 12,
        disableDefaultUI: true,  // Hide unnecessary UI elements for mobile experience
    });

    // Initialize the directions service and renderer
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
}

// Function to calculate and display route
function calculateAndDisplayRoute() {
    const startLocation = document.getElementById("start-location").value;
    const endLocation = document.getElementById("end-location").value;

    if (!startLocation || !endLocation) {
        alert("Please enter both start and end locations.");
        return;
    }

    const request = {
        origin: startLocation,
        destination: endLocation,
        travelMode: 'DRIVING'  // You can change to 'WALKING', 'BICYCLING', or 'TRANSIT'
    };

    directionsService.route(request, function(result, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
        } else {
            alert('Directions request failed due to ' + status);
        }
    });
}

// Event listener for the Find Route button
document.getElementById("find-route-btn").addEventListener("click", calculateAndDisplayRoute);