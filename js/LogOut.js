const logoutButton = document.getElementById("Logout");
function redirectToLandingPage() {
    window.location.href = 'LandingPage.html';
}

logoutButton.addEventListener('click', event => {
    event.preventDefault();

   redirectToLandingPage();
  });
