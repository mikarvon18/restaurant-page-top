function contactPage() {
    let container = document.createElement('div');
    let titleText = document.createElement('div');
    titleText.classList.add("page-title");
    titleText.textContent = "Contact Us";

    let descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add("contact-container");
    let phoneNum = document.createElement("div");
    phoneNum.textContent = "Phone: 12345689"

    let email = document.createElement("div");
    email.textContent = "Email: awesomerestaurant@restaurant.com"

    let address = document.createElement("div");
    address.textContent = "Address: 423 Awesome Street, Helsinki, Finland";

    descriptionContainer.appendChild(phoneNum);
    descriptionContainer.appendChild(email);
    descriptionContainer.appendChild(address);
  
    container.appendChild(titleText);
    container.appendChild(descriptionContainer);

    container.classList.add("container");
    return container;
  }
  
  //document.body.appendChild(component());

  export default contactPage;