export default function menuPage() {
    const container = document.createElement("div");
    container.id = "menu";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    menuTitle.className = "contentTitle";
    container.appendChild(menuTitle);

    function menuCat(name, offset, image, position) {
        const category = document.createElement("div");
        category.id = name.split(" ").join("-").toLowerCase();
        const catTitle = document.createElement("h2");
        catTitle.textContent = name.toUpperCase();
        catTitle.className = "catTitle";
        catTitle.style.backgroundImage = `url("${image}")`;
        catTitle.style.backgroundPosition = `${position}`;
        catTitle.style.paddingLeft = offset;
        category.appendChild(catTitle);

        container.appendChild(category);
    }

    function menuItem(name, desc, price, category, image, veg) {
        const item = document.createElement("div");
        item.className = "menuItem";

        const itemText = document.createElement("div");

        const itemName = document.createElement("h3");
        itemName.textContent = name;
        const itemDesc = document.createElement("p");
        itemDesc.textContent = desc;
        const itemPrice = document.createElement("p");
        itemPrice.innerHTML = `<strong>${price}</strong>`;
        itemText.appendChild(itemName);
        itemText.appendChild(itemDesc);
        itemText.appendChild(itemPrice);

        if (veg) {
            const veg = document.createElement("p");
            veg.innerHTML = "<em>V</em>";
            itemText.appendChild(veg);
        }

        item.appendChild(itemText);

        if (image) {
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

    menuCat("Pre-Show", "5%", "../src/images/elvis.jpg", "30% 20%");
    menuItem("It's Only Nachos (But I Like It)", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$10", "Pre-Show", "../src/images/natasha-bhogal-7sStoaxfJh0-unsplash.jpg");
    menuItem("Sweet Cauliflower O' Mine", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "$12", "Pre-Show", "../src/images/karolina-kolodziejczak-15h2wzAlsgE-unsplash.jpg", true);
    menuItem("Live and Let Dip", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "$12", "Pre-Show", "../src/images/nicholas-barbaros-FBbGyco88GU-unsplash.jpg", true);
    menuItem("Down on the Platter", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "$12", "Pre-Show", "../src/images/monika-grabkowska-FVf1ESEBuMI-unsplash.jpg", true);


    menuCat("Main Show", "75%", "../src/images/mercury.jpg", "30% 20%");
    menuItem("Burning Love", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$17", "Main Show", "../src/images/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg");
    menuItem("Learning to Fry", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "$15", "Main Show", "../src/images/israel-albornoz-T1IKasSmrEg-unsplash.jpg");
    menuItem("Old Time Mac & Cheese", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "$11", "Main Show", "../src/images/hermes-rivera-4qzaeR_sTYA-unsplash.jpg");
    menuItem("Salmon B. Goode", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "$25", "Main Show", "../src/images/alice-pasqual-a2scGjpiI5E-unsplash.jpg");
    menuItem("If You Want Tacos (You've Got It)", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$19", "Main Show", "../src/images/daniel-arriola-v-UlAEJTSVw-unsplash.jpg", true);


    menuCat("Encore", "10%", "../src/images/springsteen.jpg", "50% 10%");
    menuItem("All You Need Is Chocolate", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$8.50", "Encore", "../src/images/pushpak-dsilva-2UeBOL7UD34-unsplash.jpg");
    menuItem("Can't Stop Eatin' You", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "$7.50", "Encore", "../src/images/kofi-okyere-xx1USWIvIFc-unsplash.jpg");
    menuItem("Mango Creme (Come Out Tonight)", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "$8.50", "Encore", "../src/images/laura-peruchi-Wo3wvnN6EJU-unsplash.jpg");


    menuCat("Aftershow", "50%", "../src/images/vanhalen.jpg", "100% 90%");
    menuItem("Shoot to Thrill", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "$7", "Aftershow");
    menuItem("Comfortably Numb", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "$6", "Aftershow");
    menuItem("Don't Stop Me Now", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "$8", "Aftershow");
    menuItem("American Idiot", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "$7", "Aftershow");

    const vegNotice = document.createElement("p");
    vegNotice.innerHTML = "<em>V denotes vegetarian or vegan options<br/>Please speak to your server for dietary assistance</em>";

    container.appendChild(vegNotice);

    document.getElementById("content").appendChild(container);
}