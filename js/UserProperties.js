var user_ID = localStorage.getItem('USERID'); 
console.log(user_ID);

fetch(`https://localhost:44303/api/Account/${user_ID}`)
  .then(response => response.json())
  .then(properties => {
   
    // Get the property container element
    const userPropertiesContainer = document.getElementById('property-table-body');
    
    
    // Iterate over each property and generate HTML elements
    properties.forEach(property => {
   
        const tr = document.createElement('tr');   
      // Generate the property item HTML using the property data
      tr.innerHTML = `
              <td>${property.title}</td>
              <td>${property.propertyType}</td>
              <td>${property.listingType}</td>
              <td>${property.city}, ${property.streetAddress}</td>
              <td>50</td>
              <td class="action-buttons"> <a href="property-single.html?id=${property.id}" class="btn btn-primary" id = "view-properties">View</a></td>
              <td class="action-buttons"> <a href="edit_property.html?id=${property.id}" class="btn btn-outline-primary" id = "edit-properties">Edit</a></td>
              <td class="action-buttons"> <a href="manage_property.html?id=${property.id}" class="btn btn-outline-danger" id = "delete-properties">Delete</a></td>           
      `;
      userPropertiesContainer.append(tr)
    
    });
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
