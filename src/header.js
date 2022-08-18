export default function headerBar() {
    const container = document.createElement("div");
    container.id = "header";

    let width = 0;

    for (let i = 0; i < 9; i++) {
        const fret = document.createElement("div");
        fret.className = "fret";

        fret.style.width = `${width}px`;

        if (i === 4) {
            const homeButton = document.createElement("button");
            homeButton.textContent = "Home";
            fret.appendChild(homeButton);
        } else if (i === 6) {
            const menuButton = document.createElement("button");
            menuButton.textContent = "Menu";
            fret.appendChild(menuButton);
        } else if (i === 8) {
            const contactButton = document.createElement("button");
            contactButton.textContent = "Contact";
            buttonLayer.appendChild(contactButton);
        }

        container.appendChild(fret);

        width += (window.innerWidth / 100);
    }

    container.appendChild(overlay);
    container.appendChild(buttonLayer);
    document.body.appendChild(container);
}