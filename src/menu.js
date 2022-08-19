export default function menuPage() {
    const container = document.createElement("div");
    container.id = "menu";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";

    container.appendChild(menuTitle);
    document.getElementById("content").appendChild(container);
}