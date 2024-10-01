document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    // Capture the form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    let termsAccepted = document.getElementById("terms").checked;

    // Initialize the error message
    let errorMessage = "";

    // Validation
    if (!name) {
        errorMessage += "Name is required.<br>";
    }

    if (!email || !validateEmail(email)) {
        errorMessage += "Valid email is required.<br>";
    }

    if (!contactMethod) {
        errorMessage += "Preferred contact method is required.<br>";
    }

    if (!termsAccepted) {
        errorMessage += "You must accept the terms and conditions.<br>";
    }

    // Check if there are any validation errors
    if (errorMessage) {
        document.getElementById("formSummary").innerHTML = `<div class="error">${errorMessage}</div>`;
    } else {
        // No errors, proceed to store and display data

        // Store the form data in an object
        const formData = {
            name: name,
            email: email,
            contactMethod: contactMethod.value,
            termsAccepted: termsAccepted
        };

        // Display the data dynamically
        document.getElementById("formSummary").innerHTML = `
            <div>
                <strong>Name:</strong> ${formData.name}<br>
                <strong>Email:</strong> ${formData.email}<br>
                <strong>Preferred Contact Method:</strong> ${formData.contactMethod}<br>
                <strong>Terms Accepted:</strong> ${formData.termsAccepted ? "Yes" : "No"}
            </div>
        `;

        // Display a confirmation message
        document.getElementById("confirmationMessage").innerHTML = `<div class="success">Form successfully submitted!</div>`;
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
