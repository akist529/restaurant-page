import contactPage from "./contact";
import homePage from "./home";
import menuPage from "./menu";

export default function headerBar() {
    const container = document.createElement("div");
    container.id = "header";

    const fretboard = document.createElement("div");
    fretboard.id = "fretboard";

    const strings = document.createElement("div");
    strings.id = "strings";

    for (let i = 0; i < 5; i++) {
        const fret = document.createElement("div");
        fret.className = "fret";

        if (i === 1) {
            const homeButton = document.createElement("button");
            homeButton.textContent = "Home";
            homeButton.id = "homeButton";
            fret.appendChild(homeButton);
        } else if (i === 2) {
            const menuButton = document.createElement("button");
            menuButton.textContent = "Menu";
            menuButton.id = "menuButton";
            fret.appendChild(menuButton);
        } else if (i === 3) {
            const contactButton = document.createElement("button");
            contactButton.textContent = "Contact";
            contactButton.id = "contactButton";
            fret.appendChild(contactButton);
        }

        fretboard.appendChild(fret);
    }

    for (let i = 0; i < 3; i++) {
        const fret = document.createElement("div");
        fret.className = "fret";

        fretboard.firstChild.appendChild(fret);
    }

    for (let i = 0; i < 6; i++) {
        const string = document.createElement("div");
        string.className = "string";

        strings.appendChild(string);
    }

    container.appendChild(fretboard);
    container.appendChild(strings);
    document.body.appendChild(container);
}