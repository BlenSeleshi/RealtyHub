const searchButton = document.getElementById("SearchButton");

searchButton.addEventListener('click', event => {
event.preventDefault();

const Keyword = document.getElementById("SearchKeyword").value;
const PropertyType = document.getElementById("PropertyType").value;
const Location = document.getElementById("Location").value;
const Price = document.getElementById("Price").value;
const price = parseFloat(Price); 

fetch(`https://localhost:44303/api/Property/GetPropertyBySearch/${Location}/${PropertyType}/${Keyword}/${price}`)
  .then(response => response.json())
  .then(properties => {
   
    // Get the property container element
    const propertyContainer = document.getElementById('searchedPropertyContainer');
    
    // Create a row element to contain the property items
    const row = document.createElement('div');
    row.className = 'row g-4';
    
    // Iterate over each property and generate HTML elements
    properties.forEach(property => {

      // Create a column element for each property
      const column = document.createElement('div');
      column.className = 'col-lg-4 col-md-6 wow fadeInUp';
      
      // Create a property item container
      const propertyItem = document.createElement('div');
      propertyItem.className = 'property-item rounded overflow-hidden';
      
      // Generate the property item HTML using the property data
      propertyItem.innerHTML = `
      
                                    <div class="position-relative overflow-hidden">
                                        <a href=""><img class="img-fluid" src="img/property-1.jpg" alt=""></a>
                                        <div
                                            class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                            ${property.listingType}</div>
                                        <div
                                            class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                            ${property.propertyType}</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-3">${property.price}</h5>
                                        <a class="d-block h5 mb-2" href="">${property.title}</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.streetAddress}, ${property.city}</p>
                                    </div>
                                    <div class="d-flex border-top">
                                        <small class="flex-fill text-center border-end py-2"><i
                                                class="fa fa-ruler-combined text-primary me-2"></i>${property.squareFootage}</small>
                                        <small class="flex-fill text-center border-end py-2"><i
                                                class="fa fa-bed text-primary me-2"></i>${property.bedrooms}</small>
                                        <small class="flex-fill text-center py-2"><i
                                                class="fa fa-bath text-primary me-2"></i>${property.bathrooms}</small>
                                    </div>
                                
      `;
      
      // Append the property item to the column
      column.appendChild(propertyItem);
      
      // Append the column to the row
      row.appendChild(column);
    });
    
    // Append the row to the property container
    propertyContainer.appendChild(row);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  });
