export default function menuPage() {
    const container = document.createElement("div");
    container.id = "menu";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    menuTitle.className = "contentTitle";
    container.appendChild(menuTitle);

    function menuCat(name) {
        const category = document.createElement("div");
        category.id = name.split(" ").join("-").toLowerCase();
        console.log(category.id);
        const catTitle = document.createElement("h2");
        catTitle.textContent = name;
        category.appendChild(catTitle);

        container.appendChild(category);
    }

    function menuItem(name, desc, price, category) {
        const item = document.createElement("div");
        item.className = "menuItem";

        const itemName = document.createElement("h3");
        itemName.textContent = name;

        const itemDesc = document.createElement("p");
        itemDesc.textContent = desc;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = price;

        item.appendChild(itemName);
        item.appendChild(itemDesc);
        item.appendChild(itemPrice);

        const catID = category.split(" ").join("-").toLowerCase();
        document.getElementById(catID).appendChild(item);
    }

    menuCat("Starters");
    menuItem("Starter Item", "Starter Description", "$9.99", "Starters")

    menuCat("Main Show");
    menuCat("Encore");
    menuCat("The Bar");

    document.getElementById("content").appendChild(container);
}