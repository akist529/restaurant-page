import headerBar from "./header.js";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";
import "./style.css";

headerBar();

const enterLeft = (
    [
        { transform: "translateX(-150%)" },
        { transform: "translateX(0%)" }
    ]
);
const enterRight = (
    [
        { transform: "translateX(150%)" },
        { transform: "translateX(0%" }
    ]
);
const leaveLeft = (
    [
        { transform: "translateX(0%)" },
        { transform: "translateX(-150%)" }
    ]
);
const leaveRight = (
    [
        { transform: "translateX(0%)" },
        { transform: "translateX(150%)" }
    ]
);
const enterTiming = (
    {
        duration: 500,
        iterations: 1,
        easing: "ease-out",
    }
);
const leaveTiming = (
    {
        duration: 250,
        iterations: 1,
        easing: "ease-in",
    }
);

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", function(event) {
        const currentPage = document.getElementById("content").firstChild.id;

        if (event.target.id === "homeButton") {
            if (currentPage === "home") {
                return;
            } else {
                document.getElementById("content").animate(leaveRight, leaveTiming);
                document.getElementById("content").firstChild.remove();
                homePage();
                setTimeout(() => {
                    document.getElementById("content").animate(enterLeft, enterTiming);
                }, 250);
            }
        } else if (event.target.id === "menuButton") {
            if (currentPage === "menu") {
                return;
            } else if (currentPage === "home") {
                document.getElementById("content").animate(leaveLeft, leaveTiming);
                document.getElementById("content").firstChild.remove();
                menuPage();
                setTimeout(() => {
                    document.getElementById("content").animate(enterRight, enterTiming);
                }, 250);
            } else if (currentPage === "contact") {
                document.getElementById("content").animate(leaveRight, leaveTiming);
                document.getElementById("content").firstChild.remove();
                menuPage();
                setTimeout(() => {
                    document.getElementById("content").animate(enterLeft, enterTiming);
                }, 250);
            }
        } else if (event.target.id === "contactButton") {
            if (currentPage === "contact") {
                return;
            } else {
                document.getElementById("content").animate(leaveLeft, leaveTiming);
                document.getElementById("content").firstChild.remove();
                contactPage();
                setTimeout(() => {
                    document.getElementById("content").animate(enterRight, enterTiming);
                }, 250);
            }
        }
    });
}

const container = document.createElement("div");
container.id = "content";
document.body.appendChild(container);

homePage();