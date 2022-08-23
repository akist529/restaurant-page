export default function contactPage() {
    const container = document.createElement("div");
    container.id = "contact";

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    contactTitle.className = "contentTitle";
    container.appendChild(contactTitle);

    const message = document.createElement("p");
    message.textContent = "We strive to give our customers the best experience possible when visiting our restaurant. If we can improve in any way, please submit a form below with your issues or feedback. We will respond to you as soon as we can!";
    container.appendChild(message);

    const contactInfo = document.createElement("div");
    contactInfo.id = "contactInfo";
    const name = document.createElement("h2");
    name.textContent = "Rockstar Cafe";
    contactInfo.appendChild(name);
    const address = document.createElement("p");
    address.textContent = "101 Rockstar Avenue, Hollywood, CA";
    contactInfo.appendChild(address);
    const phone = document.createElement("p");
    phone.textContent = "(123) 456-7890";
    contactInfo.appendChild(phone);
    container.appendChild(contactInfo);

    const social = document.createElement("div");
    social.id = "social";
    const text = document.createElement("p");
    text.textContent = "FOLLOW US ON: ";
    social.appendChild(text);
    const socialLogos = document.createElement("div");
    socialLogos.id = "social-logos";
    const facebook = document.createElement("img");
    facebook.className = "social-logo";
    facebook.src = "../src/images/facebook.png";
    socialLogos.appendChild(facebook);
    const tripAdvisor = document.createElement("img");
    tripAdvisor.className = "social-logo";
    tripAdvisor.src = "../src/images/tripadvisor.png";
    socialLogos.appendChild(tripAdvisor);
    const yelp = document.createElement("img");
    yelp.className = "social-logo";
    yelp.src = "../src/images/yelp.png";
    yelp.style.borderRadius = "5px";
    socialLogos.appendChild(yelp);
    social.appendChild(socialLogos);
    container.appendChild(social);

    const form = document.createElement("form");
    form.id = "form";
    const yourName = document.createElement("input");
    yourName.placeholder = "Your name (required)";
    yourName.id = "yourName";
    form.appendChild(yourName);
    const yourEmail = document.createElement("input");
    yourEmail.placeholder = "Your email (Required)";
    yourEmail.id = "yourEmail";
    form.appendChild(yourEmail);
    const yourPhone = document.createElement("input");
    yourPhone.placeholder = "Phone (optional)";
    yourPhone.id = "yourPhone";
    form.appendChild(yourPhone);
    const yourMessage = document.createElement("textarea");
    yourMessage.placeholder = "Your message";
    yourMessage.id = "yourMessage";
    form.appendChild(yourMessage);
    const submit = document.createElement("button");
    submit.textContent = "SUBMIT";
    submit.id = "submit";
    form.appendChild(submit);
    container.appendChild(form);

    document.getElementById("content").appendChild(container);
}