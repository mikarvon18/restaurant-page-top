function homePage() {
    let container = document.createElement('div');
    container.classList.add("container");
    let title = document.createElement("div");
    title.textContent = "Awesome Restaurant"
    title.classList.add("page-title");
    let infotext = document.createElement("div");
    infotext.textContent = "This restaurant is so awesome that you must try it. There are zero customers and most of them have given a negative review";
    let hours = document.createElement("div");
    let hoursTitle = document.createElement("div");
    let hoursList = document.createElement("ol");
    let locationInfo = document.createElement("div");
    let locationInfoTitle = document.createElement("div");
    let locationInfoText = document.createElement("div");

    let days = []
    let monday = document.createElement("li");
    let tuesday = document.createElement("li");
    let wednesday = document.createElement("li");
    let thursday = document.createElement("li");
    let friday = document.createElement("li");
    let saturday = document.createElement("li");
    let sunday = document.createElement("li");
    days.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday);

    hoursTitle.textContent = "We are open: ";

    monday.textContent = "Monday: 10am - 9pm";
    tuesday.textContent = "Tuesday: 10am - 9pm";
    wednesday.textContent = "Wednesday: 10am - 9pm";
    thursday.textContent = "Thursday: 10am - 12pm";
    friday.textContent = "Friday: 10am - 12pm";
    saturday.textContent = "Saturday: 12am - 8pm";
    sunday.textContent = "Sunday: Closed";

    for (let i = 0; i < days.length; i++) {
      days[i].classList.add("day-info-text");
      hoursList.appendChild(days[i]);
    };
    

    locationInfoTitle.textContent = "Location"
    locationInfoTitle.classList.add("content-title");
    hoursTitle.classList.add("content-title");
    hoursList.classList.add("hours-list");

    locationInfoText.textContent = "423 Awesome Street, Helsinki, Finland";

    locationInfo.appendChild(locationInfoTitle);
    locationInfo.appendChild(locationInfoText);
  
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursList);


    infotext.classList.add("inner-container");
    hours.classList.add("inner-container");
    locationInfo.classList.add("inner-container");

    container.appendChild(title);
    container.appendChild(infotext);
    container.appendChild(hours);
    container.appendChild(locationInfo);

  
    return container;
  }
  

  export default homePage;