export default function headerBar() {
    const container = document.createElement("div");
    container.id = "header";

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    container.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    container.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    container.appendChild(contactButton);

    document.body.appendChild(container);
}