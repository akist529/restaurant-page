export default function homePage() {
    const container = document.createElement("div");
    container.id = "home";


    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Rockstar Cafe";
    homeTitle.className = "contentTitle";
    container.appendChild(homeTitle);


    const welcome = document.createElement("div");
    const welText = document.createElement("p");
    welText.textContent = "Rockstar Cafe offers an unparalleled experience for those who still like that old time rock & roll. You'll twist and shout for our delicious food offerings while kicking back to some foot-tapping live music - and if that's not enough to get you on your feet, an extensive craft beer selection will have you dancing in the dark in no time.";
    welcome.appendChild(welText);
    welcome.className = "contentBlock";
    container.appendChild(welcome);


    const hours = document.createElement("div");
    hours.className = "contentBlock";

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours of Operation";
    hoursHeader.className = "contentHeader";
    hours.appendChild(hoursHeader);

    const sunText = document.createElement("p");
    sunText.textContent = "Sunday: 9:00AM - 5:00PM";
    hours.appendChild(sunText);

    const monText = document.createElement("p");
    monText.textContent = "Monday: 9:00AM - 5:00PM";
    hours.appendChild(monText);

    const tuesText = document.createElement("p");
    tuesText.textContent = "Tuesday: 9:00AM - 5:00PM";
    hours.appendChild(tuesText);

    const wedText = document.createElement("p");
    wedText.textContent = "Wednesday: 9:00AM - 5:00PM";
    hours.appendChild(wedText);

    const thursText = document.createElement("p");
    thursText.textContent = "Thursday: 9:00AM - 5:00PM";
    hours.appendChild(thursText);

    const friText = document.createElement("p");
    friText.textContent = "Friday: 9:00AM - 5:00PM";
    hours.appendChild(friText);

    const satText = document.createElement("p");
    satText.textContent = "Saturday: 9:00AM - 5:00PM";
    hours.appendChild(satText);

    container.appendChild(hours);


    const location = document.createElement("div");
    location.className = "contentBlock";

    const locationHeader = document.createElement("h2");
    locationHeader.textContent = "Location";
    locationHeader.className = "contentHeader";
    location.append(locationHeader);

    const locationText = document.createElement("p");
    locationText.textContent = "101 Rockstar Avenue, Hollywood, CA";
    location.appendChild(locationText);

    container.appendChild(location);


    document.getElementById("content").appendChild(container);
}