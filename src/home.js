export default function homePage() {
    const container = document.createElement("div");
    container.id = "home";

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Home";
    homeTitle.className = "contentTitle";
    container.appendChild(homeTitle);

    const review = document.createElement("div");
    const reviewText = document.createElement("p");
    reviewText.textContent = "Bla bla bla";
    review.appendChild(reviewText);
    review.className = "contentBlock";
    container.appendChild(review);

    const hours = document.createElement("div");
    const hoursText = document.createElement("p");
    hoursText.textContent = "9:00AM - 5:00PM";
    hours.appendChild(hoursText);
    hours.className = "contentBlock";
    container.appendChild(hours);

    const location = document.createElement("div");
    const locationText = document.createElement("p");
    locationText.textContent = "1234 Some Street";
    location.appendChild(locationText);
    location.className = "contentBlock";
    container.appendChild(location);

    document.getElementById("content").appendChild(container);
}