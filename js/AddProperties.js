var USER_ID = localStorage.getItem('USERID'); 
console.log(USER_ID);
// const fileInput = document.querySelector('input[type="file"]');


// fileInput.addEventListener('change', (event) => {

//   const fileList = event.target.files;
  
//   const images = [];
  
//   for (let i = 0; i < fileList.length; i++) {
//     const file = fileList[i];
  
//     const reader = new FileReader();
    
//     reader.addEventListener('load', () => {
//       const image = {
//         data: reader.result,
//         url: window.URL.createObjectURL(file)
//       };
      
//       images.push(image);
//     });
    
//     reader.readAsArrayBuffer(file);
//   }})

// const inputElement = document.querySelector('input[type="file"]');

// const files = inputElement.files;
// for (let i = 0; i < files.length; i++) {
//   const file = files[i];
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => {
//     const imageDataUrl = reader.result;
//     const imageData = imageDataUrl.split(',')[1];
//     const image = new Image();
//     // image.src = imageDataUrl;
//     images.push({ url: imageDataUrl, Data: imageData });
//  }};

const submitButton = document.getElementById("submitButton");
const imageFilesInput = document.getElementById("formFileMultiple");

submitButton.addEventListener('click', event => {
event.preventDefault();
alert("Hello")


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkedValues = [];
let images = [];

for (const file of imageFilesInput.files) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
      images.push({
          url: reader.result,
          Data: reader.result.split(',')[1]
      });
  };
}

checkboxes.forEach(function(checkbox) {
  if (checkbox.checked) {
    checkedValues.push(checkbox.value);
  }
})



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
   // const amenities = document.getElementById("amenities").value;
    // const propertyImage = document.getElementById("propertyImage").files[0];
  
    const formData = new FormData();
    formData.append("Title", title);
    formData.append("SquareFootage", sqft);
    formData.append("Bedrooms", bedRoom);
    formData.append("Bathrooms", bathRoom);
    formData.append("Kitchen", kitchen);
    formData.append("Price", price);
    formData.append("City", city);
    formData.append("StreetAddress", streetAddress);
    formData.append("Description", description);
    formData.append("PropertyType", propertyType);
    formData.append("ListingType", listingType);
    formData.append("TotalFloor", totalFloor);
    formData.append("Floor", floor);
    formData.append("Owner", owner);
    formData.append("OpenHouse", openHouse1);
    formData.append("OpenHouse2", openHouse2);
    formData.append("UserId", USER_ID);
   // formData.append('UserId',window.USER_ID);
    formData.append('Images', images);
    // for (let i = 0; i < images.length; i++) {
    //   formData.append("Images[" + i + "].url", images[i].url);
    //   formData.append("Images[" + i + "].Data", images[i].Data);
    // }
    formData.append("Amenities[]", checkedValues);
  
  
  console.log(images);
  console.log(window.USER_ID);
    // Send the user object to the backend

    
    fetch('https://localhost:44303/api/Property', {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  });


//   const images = document.getElementById("imageFiles").files;
//   for (const file of images.files) {
//     formData.append('Images', file);
// }