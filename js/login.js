const loginform = document.getElementById("loginform");
function redirectToIndexPage() {
    window.location.href = 'index.html';
}

loginform.addEventListener('submit', event => {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


  
    // Perform validation on the form fields
//     if (firstName === "" || lastName === "" || email === "" || phoneNumber === ""
//    || password === "") {
//       alert("Please fill in all required fields.");
//       return false;
//     }
  
    // Create a user object
    var userlogin = {

    
      email: email,
      password: password,
      
      };
  
    // Send the user object to the backend
    fetch('https://localhost:44303/api/Account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userlogin)
    })
    .then(response => {
      if (response.ok) {
        alert("Login successful!");
        redirectToIndexPage();
        return response.json(); 
      } else {
        // Registration failed
        alert("Login failed. Please try again.");
      }
    })
    .then(data => {
      //  data = JSON.parse(data); // Parse response as JSON
        // Store the user ID in a global variable
        console.log(data); 
         var USER_ID = data.id;
        localStorage.setItem('USERID', USER_ID);
        console.log(USER_ID)
    })
    .catch(error => {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    });
    return false;
  });
