document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        firstname: document.getElementById('firstname').value,
        surname: document.getElementById('surname').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        emg_firstname: document.getElementById('emg_firstname').value,
        emg_surname: document.getElementById('emg_surname').value,
        emg_phone: document.getElementById('emg_phone').value,
        emg_address: document.getElementById('emg_address').value,
        sos_message: document.getElementById('sos_message').value
    };

    // Convert to CSV format
    const csvContent = `data:text/csv;charset=utf-8,
        Firstname,Surname,Phone,City,Emergency Firstname,Emergency Surname,Emergency Phone,Emergency Address,SOS Message\n
        ${formData.firstname},${formData.surname},${formData.phone},${formData.city},${formData.emg_firstname},${formData.emg_surname},${formData.emg_phone},${formData.emg_address},${formData.sos_message}`;

    // Encode the CSV content and create a link to download
    const encodedUri = encodeURIComponent(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "user_data.csv");

    // Append the link and simulate a click
    document.body.appendChild(link);
    link.click();

    // Remove the link after download
    document.body.removeChild(link);

    // Redirect to home.html after download
    window.location.href = "home.html";
});