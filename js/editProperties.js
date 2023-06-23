const queryParams = new URLSearchParams(window.location.search);
const propertyId = queryParams.get('id');

    
fetch( `https://localhost:44303/api/Property/${propertyId}`)
.then(response => response.json())
.then(property => {
 
    document.getElementById("title").value = `${property.title}`;
    document.getElementById("sqft").value = `${property.squareFootage}`;
    document.getElementById("description").value = `${property.description}`;
    document.getElementById("price").value = `${property.price}`;
    document.getElementById("city").value = `${property.city}`;
    document.getElementById("address").value = `${property.streetAddress}`;

   var bedroom = document.getElementById("bedrooms");

   var newOption = new Option(property.bedrooms, '', true, true);
   bedroom.add(newOption);

   var bathroom = document.getElementById("bathrooms");

   var newOption = new Option(property.bathrooms, '', true, true);
   bathroom.add(newOption);

   var kitchen =  document.getElementById("kitchens");

   var newOption = new Option(property.kitchen, '', true, true);
   kitchen.add(newOption);


   var property_type =  document.getElementById("p_type");

   var newOption = new Option(property.propertyType, '', true, true);
   property_type.add(newOption);

   var listing_type =  document.getElementById("listingType");

   var newOption = new Option(property.listingType, '', true, true);
   listing_type.add(newOption);

   var totFloor =  document.getElementById("totalFloor");

   var newOption = new Option(property.totalFloor, '', true, true);
   totFloor.add(newOption);

   var floor =  document.getElementById("floor");

   var newOption = new Option(property.floor, '', true, true);
   floor.add(newOption);

   
  
})
.catch(error => {
  console.error('Error:', error);
});

  
//SUBMIT THE EDITED PROPERTY

const submitButton = document.getElementById("subButton");

submitButton.addEventListener('click', event => {
event.preventDefault();
alert("Hello")

   
    const title = document.getElementById("title").value;
    const sqft = document.getElementById("sqft").value;
    const bedRoom = document.getElementById("bedrooms").value;
    const bathRoom = document.getElementById("bathrooms").value;
    const kitchen = document.getElementById("kitchens").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const city = document.getElementById("city").value;
    const streetAddress = document.getElementById("address").value;
    const propertyType = document.getElementById("p_type").value;
    const listingType = document.getElementById("listingType").value;
    const totalFloor = document.getElementById("totalFloor").value;
    const floor = document.getElementById("floor").value;
    const owner = document.getElementById("flexRadioDefault1").value;
    const openHouse1 = document.getElementById("date1").value;
    const openHouse2 = document.getElementById("date2").value;
  

    const property = {
        Id: propertyId,
        Title: title,
        SquareFootage: sqft,
        Bedrooms: bedRoom,
        Bathrooms: bathRoom,
        Kitchen: kitchen,
        Price: price,
        City: city,
        StreetAddress: streetAddress,
        Description: description,
        PropertyType: propertyType,
        ListingType: listingType,
        TotalFloor: totalFloor,
        Floor: floor,
        Owner: owner,
        OpenHouse: openHouse1,
        OpenHouse2: openHouse2
      };
    // const formData = new FormData();
    
    // formData.append("Id", propertyId);
    // formData.append("Title", title);
    // formData.append("SquareFootage", sqft);
    // formData.append("Bedrooms", bedRoom);
    // formData.append("Bathrooms", bathRoom);
    // formData.append("Kitchen", kitchen);
    // formData.append("Price", price);
    // formData.append("City", city);
    // formData.append("StreetAddress", streetAddress);
    // formData.append("Description", description);
    // formData.append("PropertyType", propertyType);
    // formData.append("ListingType", listingType);
    // formData.append("TotalFloor", totalFloor);
    // formData.append("Floor", floor);
    // formData.append("Owner", owner);
    // formData.append("OpenHouse", openHouse1);
    // formData.append("OpenHouse2", openHouse2);
  

    // Send the user object to the backend

    
    fetch(`https://localhost:44303/api/Property/UpdateProperty`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(property)
      })
      if (!response.ok) {
        throw new Error('Failed to update property');
      }
  
      // Handle the response accordingly
      const data = response.json();
      console.log(data);
  });


//   const images = document.getElementById("imageFiles").files;
//   for (const file of images.files) {
//     formData.append('Images', file);
// }

