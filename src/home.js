export default function homePage() {
    const container = document.createElement("div");
    container.id = "home";

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Home";

    container.appendChild(homeTitle);
    document.getElementById("content").appendChild(container);
}