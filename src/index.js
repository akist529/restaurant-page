import headerBar from "./header.js";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";
import "./style.css";

headerBar();

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", function(event) {
        document.getElementById("content").firstChild.remove();

        if (event.target.id === "homeButton") {
            homePage();
        } else if (event.target.id === "menuButton") {
            menuPage();
        } else if (event.target.id === "contactButton") {
            contactPage();
        }
    });
}

const container = document.createElement("div");
container.id = "content";
document.body.appendChild(container);

homePage();