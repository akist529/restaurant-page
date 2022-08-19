export default function contactPage() {
    const container = document.createElement("div");
    container.id = "contact";

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact";

    container.appendChild(contactTitle);
    document.getElementById("content").appendChild(container);
}