import pageLoader  from "./page-loader";
import "./style.css";


let content = document.querySelector("div#content");
let navBar = document.querySelector("#nav-bar");

let homeBtn = document.createElement("button");
let menuBtn = document.createElement("button");
let contactBtn = document.createElement("button");
let btns = [];
homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";

homeBtn.addEventListener("click", function(){
    

    switchPage("home", 0);
});
menuBtn.addEventListener("click", function(){

    switchPage("menu", 1);
});
contactBtn.addEventListener("click", function(){

    switchPage("contact", 2);
});

navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);
btns.push(homeBtn, menuBtn, contactBtn);

//content.appendChild(pageLoader("home"));
switchPage("home", 0);


function switchPage(page, btnIndex){
    for (let i = 0; i < btns.length; i++) {
        if(i == btnIndex){
            btns[i].disabled = true;
        } else {
            btns[i].disabled = false;
        }
        
    }
    content.innerHTML = "";
    content.appendChild(pageLoader(page));
};