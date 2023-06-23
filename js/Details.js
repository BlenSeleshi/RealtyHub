const queryParams = new URLSearchParams(window.location.search);
const propertyId = queryParams.get('id');

// var USERID = localStorage.getItem('USERID'); 
// console.log(USERID);

//const userid = localStorage.getItem('USERID');

console.log(propertyId);
//console.log(userid);

fetch( `https://localhost:44303/api/Property/${propertyId}`)
  .then(response => response.json())
  .then(property => {
   
    const USERID = property.userId
    // Get the property details container element
    const propertyDetailContainer = document.getElementById('PropertyDetailsContainer');
    const titleAndAddress = document.getElementById('TitleAddress');

       const title = document.createElement('h1');
       const address = document.createElement('p');

    title.className = 'fw-normal'
    address.className = 'fs-5 text-dark'

    title.innerHTML = `${property.title}`;
    address.innerHTML =`${property.city},${property.streetAddress}`;
    const PropertyDetails = document.createElement('div');
    PropertyDetails.className = 'row justify-content-between';
      
      // Generate the property item HTML using the property data
      PropertyDetails.innerHTML = `
      <div class="col-md-5 col-lg-4">
      <div class="property-price d-flex justify-content-center foo">
        <div class="card-header-c d-flex">
          <div class="card-box-ico">
            <span class="bi bi-cash">ETB</span>
          </div>
          <div class="card-title-c align-self-center">
            <h5 class="title-c">${property.price}</h5>
          </div>
        </div>
      </div>
      <div class="property-summary">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box-d section-t4">
              <h3 class="title-d">Quick Summary</h3>
            </div>
          </div>
        </div>
        <div class="summary-list">
          <ul class="list">
            <li class="d-flex justify-content-between">
              <strong>Property ID:</strong>
              <span>${property.id}</span>
            </li>
            <li class="d-flex justify-content-between">
              <strong>Location:</strong>
              <span>${property.city}, ${property.streetAddress}</span>
            </li>
            <li class="d-flex justify-content-between">
              <strong>Property Type:</strong>
              <span>${property.propertyType}</span>
            </li>
            <li class="d-flex justify-content-between">
              <strong>Status:</strong>
              <span>${property.listingType}</span>
            </li>
            <li class="d-flex justify-content-between">
              <strong>Area:</strong>
              <span>${property.squareFootage}m
                <sup>2</sup>
              </span>
            </li>
            <li class="d-flex justify-content-between">
              <strong>Beds:</strong>
              <span>${property.bedrooms}</span>
            </li>
            <li class="d-flex justify-content-between">
              <strong>Baths:</strong>
              <span>${property.bathrooms}</span>
            </li>
            <li class="d-flex justify-content-between">
              <strong>Kitchen:</strong>
              <span>${property.kitchen}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-7 col-lg-7 section-md-t3">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box-d">
            <h3 class="title-d">Property Description</h3>
          </div>
        </div>
      </div>
      <div class="property-description">
        <p class="description color-text-a">
          ${property.description}
        </p>
      </div>
      <div class="row section-t3">
        <div class="col-sm-12">
          <div class="title-box-d">
            <h3 class="title-d">Amenities</h3>
          </div>
        </div>
      </div>
      <div class="amenities-list color-text-a">
        <ul class="list-a no-margin">
          <li>Balcony</li>
          <li>Outdoor Kitchen</li>
          <li>Cable Tv</li>
          <li>Deck</li>
          <li>Tennis Courts</li>
          <li>Internet</li>
          <li>Parking</li>
          <li>Sun Room</li>
          <li>Concrete Flooring</li>
        </ul>
      </div>
    </div>
      `;

      propertyDetailContainer.appendChild(PropertyDetails);
      //contactOwnerContainer.appendChild(ContactOwner);
    
      

  fetch(`https://localhost:44303/api/Account/id/${USERID}`)
  .then(response => response.json())
  .then(user => {
   
    const propertyOwnerContainer = document.getElementById('contactOwnerContainer');  
    const div2 = document.createElement('div');

    div2.className = 'property-agent';
    div2.innerHTML = `
    <h4 class="title-agent">${user.firstName} ${user.lastName}</h4>
    <p class="color-text-a">
     If you are interested in this house, below is the account inforamtion of the property owner.
     Use the information and contact the owner to seal the deal!
    </p>
    <ul class="list-unstyled">
      <li class="d-flex justify-content-between">
        <strong>Phone:</strong>
        <span class="color-text-a">${user.phoneNumber}</span>
      </li>
      <li class="d-flex justify-content-between">
        <strong>Email:</strong>
        <span class="color-text-a">${user.email}</span>
      </li>
      <li class="d-flex justify-content-between">
        <strong>FaceBook:</strong>
        <span class="color-text-a">${user.facebookLink}</span>
      </li>
      <li class="d-flex justify-content-between">
        <strong>Instagram:</strong>
        <span class="color-text-a">${user.instagramLink}</span>
      </li>
    </ul>
    <div class="socials-a">
      <ul class="list-inline">
        <li class="list-inline-item">
          <a href="#">
            <i class="bi bi-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#">
            <i class="bi bi-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#">
            <i class="bi bi-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#">
            <i class="bi bi-linkedin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
    `;
    propertyOwnerContainer.appendChild(div2);
    titleAndAddress.appendChild(title);
    titleAndAddress.appendChild(address);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  })
  .catch(error => {
    console.error('Error:', error);
  });

