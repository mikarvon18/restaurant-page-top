import homePage from "./home";
import contactPage from "./contact";
import menuPage  from "./menu";

function pageLoader(page) {
    if (page == "home"){
        return homePage();
    } else if (page == "contact"){
        return contactPage();
    } else if (page == "menu"){
        return menuPage();
    };
  };
  
  //document.body.appendChild(component());

  export default pageLoader;