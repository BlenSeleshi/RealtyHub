const form = document.getElementById("form");

function redirectToLoginPage() {
  window.location.href = 'login.html';
}

form.addEventListener('submit', event => {
    event.preventDefault();
  
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var userName = document.getElementById("username").value;
    var facebookLink = document.getElementById("facebook").value;
    var instagramLink = document.getElementById("instagram").value;
    var twitterLink = document.getElementById("twitter").value;
    var linkedinLink = document.getElementById("linkedin").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("pnumber").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("con_password").value;

  
    // Perform validation on the form fields
//     if (firstName === "" || lastName === "" || email === "" || phoneNumber === ""
//    || password === "") {
//       alert("Please fill in all required fields.");
//       return false;
//     }
  
    // Create a user object
    var user = {

      firstname: firstName,
      lastname: lastName,
      facebook: facebookLink,
      instagram: instagramLink,
      twitter: twitterLink,
      linkedin: linkedinLink,
      username: userName,
      email: email,
      phonenumber: phoneNumber,
      password: password,
      confirmpassword: confirmPassword
      };
  
    // Send the user object to the backend
    fetch('https://localhost:44303/api/Account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (response.ok) {
        // Registration successful
        alert("Registration successful!");
        redirectToLoginPage();
      } else {
        // Registration failed
        alert("Registration failed. Please try again.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    });
    return false;
  });
