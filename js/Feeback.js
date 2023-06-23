var USER_id = localStorage.getItem('USERID'); 
console.log(USER_id);

const submitFeedbackButton = document.getElementById("submitFeedback");

submitFeedbackButton.addEventListener('click', event => {
event.preventDefault();
alert("Hello")



    const feedbackDetail = document.getElementById("feedbackMessage").value;

    const feedback = {
        Feedbacks: feedbackDetail,
        UserId: USER_id,
      };;

    
    fetch('https://localhost:44303/api/Feedback/SubmitFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
      })
      // Handle the response accordingly
  });
