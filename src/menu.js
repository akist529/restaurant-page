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
        const catTitle = document.createElement("h2");
        catTitle.textContent = name;
        catTitle.className = "catTitle";
        category.appendChild(catTitle);

        container.appendChild(category);
    }

    function menuItem(name, desc, price, category, image) {
        const item = document.createElement("div");
        item.className = "menuItem";

        const itemText = document.createElement("div");

        const itemName = document.createElement("h3");
        itemName.textContent = name;
        const itemDesc = document.createElement("p");
        itemDesc.textContent = desc;
        const itemPrice = document.createElement("p");
        itemPrice.textContent = price;
        itemText.appendChild(itemName);
        itemText.appendChild(itemDesc);
        itemText.appendChild(itemPrice);
        item.appendChild(itemText);

        if (image !== undefined) {
            const itemPic = document.createElement("img");
            itemPic.src = "../src/images/guitar-pick.png";
            itemPic.style.backgroundImage = `url(${image})`;

            item.appendChild(itemPic);
        }

        const catID = category.split(" ").join("-").toLowerCase();
        
        for (const menuCat of container.children) {
            if (menuCat.id === catID) {
                menuCat.appendChild(item);
            }
        }
    }

    menuCat("STARTERS");
    menuItem("It's Only Nachos (But I Like It)", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$10", "Starters", "../src/images/natasha-bhogal-7sStoaxfJh0-unsplash.jpg");
    menuItem("Sweet Cauliflower O' Mine", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "$12", "Starters", "../src/images/karolina-kolodziejczak-15h2wzAlsgE-unsplash.jpg");
    menuItem("Live and Let Dip", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "$12", "Starters", "../src/images/nicholas-barbaros-FBbGyco88GU-unsplash.jpg");
    menuItem("Down on the Platter", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "$12", "Starters", "../src/images/monika-grabkowska-FVf1ESEBuMI-unsplash.jpg");


    menuCat("Main Show");
    menuItem("Burning Love", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$10", "Main Show", "../src/images/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg");
    menuItem("Learning to Fry", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "$12", "Main Show", "../src/images/israel-albornoz-T1IKasSmrEg-unsplash.jpg");
    menuItem("Old Time Mac & Cheese", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "$12", "Main Show", "../src/images/hermes-rivera-4qzaeR_sTYA-unsplash.jpg");
    menuItem("Salmon B. Goode", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "$12", "Main Show", "../src/images/alice-pasqual-a2scGjpiI5E-unsplash.jpg");
    menuItem("If You Want Tacos (You've Got It)", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$12", "Main Show", "../src/images/daniel-arriola-v-UlAEJTSVw-unsplash.jpg");


    menuCat("Encore");
    menuItem("All You Need Is Chocolate", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$8.50", "Encore", "../src/images/pushpak-dsilva-2UeBOL7UD34-unsplash.jpg");
    menuItem("Can't Stop Eatin' You", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "$7.50", "Encore", "../src/images/kofi-okyere-xx1USWIvIFc-unsplash.jpg");
    menuItem("Mango Creme (Come Out Tonight)", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "$8.50", "Encore", "../src/images/laura-peruchi-Wo3wvnN6EJU-unsplash.jpg");


    menuCat("The Bar");
    menuItem("Shoot to Thrill", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$10", "The Bar");
    menuItem("Comfortably Numb", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "$12", "The Bar");
    menuItem("Don't Stop Me Now", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "$12", "The Bar");
    menuItem("American Idiot", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "$12", "The Bar");


    document.getElementById("content").appendChild(container);
}