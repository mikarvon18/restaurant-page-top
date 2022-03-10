import MeatBall from "./images/meatballs.jpg"
import Soup from "./images/soup.jpg"
import Ham from "./images/ham.jpg"
import Steak from "./images/steak.jpg"
import Bread from "./images/bread.jpg"


function menuPage() {
    let container = document.createElement('div');
    container.classList.add("menu-container")
    container.appendChild(addMenuItem("Meatballs", "Tasty balls made of meat", MeatBall, "9,99"));
    container.appendChild(addMenuItem("Soup", "Tasty soup made of meat and water", Soup, "19,99"));
    container.appendChild(addMenuItem("Ham", "Tasty ham made of pork", Ham, "14,99"));
    container.appendChild(addMenuItem("Steak", "Tasty steak made of meat", Steak, "12,99"));
    container.appendChild(addMenuItem("Bread", "Tasty bread made of wheat", Bread, "3,99"));
  
    return container;
  }
  function addMenuItem(title, description, imageName, price){
      let newItem = document.createElement("div");
      let titleText = document.createElement("div");
      let descriptionText = document.createElement("div");
      let image = document.createElement("img");
      let priceText = document.createElement("div");

      newItem.classList.add("item-container");
      titleText.classList.add("item-title", "content-title");
      titleText.textContent = title;

      descriptionText.classList.add("item-description");
      descriptionText.textContent = description;

      //image.src = `images/${imageName.toLowerCase()}.png`;
      image.classList.add("menu-image");
      image.src = imageName;
      image.alt = `${imageName}`

      priceText.classList.add("item-price");
      priceText.textContent = `${price}€`;

      newItem.appendChild(titleText);
      newItem.appendChild(priceText);
      newItem.appendChild(descriptionText);
      newItem.appendChild(image);
      
      
      return newItem;


  }

  export default menuPage;