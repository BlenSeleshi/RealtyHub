
fetch( `https://localhost:44303/api/Feedback`)
  .then(response => response.json())
  .then(feedbackList => {
   
    // Get the property details container element
    const FeedbackContainer = document.getElementById('FeedbackContainer');

    feedbackList.forEach(feedback => {

  const USERID = feedback.userId
 fetch(`https://localhost:44303/api/Account/id/${USERID}`)
  .then(response => response.json())
  .then(user => {
   
    const Fname = user.firstName;
    const Lname = user.lastName;
    const Email = user.email;
    
 
    const feedbackDetail = document.createElement('div');
  
    feedbackDetail.className = 'testimonial-item bg-light rounded p-3'
      
      // Generate the property item HTML using the property data
      feedbackDetail.innerHTML = `
      <div class="bg-white border rounded p-4">
      <p>${feedback.feedbacks}</p>
      <div class="d-flex align-items-center">
          <img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg"
              style="width: 45px; height: 45px;">
          <div class="ps-3">
              <h6 class="fw-bold mb-1">${Fname} ${Lname}</h6>
              <small>${Email}</small>
          </div>
      </div>
  </div>
      `;
FeedbackContainer.appendChild(feedbackDetail);

})
.catch(error => {
  console.error('Error:', error);
});
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

