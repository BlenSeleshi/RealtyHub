
fetch(`https://localhost:44303/api/Property/DeleteProperty/${propertyId}`, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


  
