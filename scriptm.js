document.addEventListener("DOMContentLoaded", function() {
    const sosBtn = document.getElementById("sos-btn");
    const exitBtn = document.querySelector(".exit-btn");
    const statusText = document.getElementById("status-text");
    const environmentStatus = document.getElementById("environment-status");

    // Toggle Safety Mode
    sosBtn.addEventListener("click", function() {
        if (statusText.innerText === "MONITORING") {
            statusText.innerText = "UNSAFE";
            statusText.classList.remove("status-monitoring");
            statusText.classList.add("status-unsafe");
            environmentStatus.innerText = "Danger Detected!";
            alert("SOS Alert Sent!");
        } else {
            statusText.innerText = "MONITORING";
            statusText.classList.remove("status-unsafe");
            statusText.classList.add("status-monitoring");
            environmentStatus.innerText = "Analyzing Data...";
        }
    });

    // Handle Exit Safety Mode Button
    exitBtn.addEventListener("click", function() {
        // Redirect to home.html
        window.location.href = "home.html";
    });

    // Toggle icon for visibility (future use)
    document.querySelector('.toggle-mode').addEventListener('click', function() {
        alert("Toggling visibility (future feature).");
    });
});

