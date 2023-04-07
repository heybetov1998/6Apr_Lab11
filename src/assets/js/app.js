const products = document.querySelector("#products");
const nameInput = document.querySelector("#productName");
const priceInput = document.querySelector("#productPrice");
const linkInput = document.querySelector("#imageSrc");
const addButton = document.querySelector("#addNewProduct");
const searchInput = document.querySelector("#search");
// const searchButton = document.querySelector("#searchButton");

let id = 4;
const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "Product 1",
        src: "src/assets/images/prod1.jpg",
        price: 10,
    },
    {
        id: 2,
        name: "Product 2",
        src: "src/assets/images/prod2.jpeg",
        price: 10,
    },
    {
        id: 3,
        name: "Product 3",
        src: "src/assets/images/prod3.jpeg",
        price: 10,
    },
    {
        id: 4,
        name: "Product 4",
        src: "src/assets/images/prod4.webp",
        price: 10,
    },
];

const render = (productArray) => {
    products.innerHTML = "";

    for (const product of productArray) {
        createProduct(product);
    }
};

const createProduct = (product) => {
    products.appendChild(createProductCardParentElement(product));
};

const createProductCardParentElement = (product) => {
    const colDiv = document.createElement("div");

    colDiv.classList.add("col-md-4");

    colDiv.appendChild(createProductCardElement(product));

    return colDiv;
};

const createProductCardElement = (product) => {
    const productCard = document.createElement("div");

    productCard.classList.add(
        "productCard",
        "card",
        "mt-4",
        "shadow",
        "shadow-sm"
    );

    productCard.append(
        createImgElement(product),
        createCardBodyElement(product)
    );

    return productCard;
};

const createImgElement = (product) => {
    const img = document.createElement("img");

    img.setAttribute("src", product.src);
    img.classList.add("card-img-top");
    img.setAttribute("alt", product.name);

    return img;
};

const createCardBodyElement = (product) => {
    const cardBody = document.createElement("div");

    cardBody.classList.add("card-body");

    cardBody.append(
        createCardTitleElement(product),
        createCardTextElement(product)
    );

    return cardBody;
};

const createCardTextElement = (product) => {
    const cardText = document.createElement("p");

    cardText.classList.add("card-text");
    cardText.innerText = `Price: ${product.price}$`;

    return cardText;
};

const createCardTitleElement = (product) => {
    const cardTitle = document.createElement("h5");

    cardTitle.classList.add("card-title");
    cardTitle.innerText = product.name;

    return cardTitle;
};

const addNewProduct = () => {
    DUMMY_PRODUCTS.push({
        id: ++id,
        name:
            nameInput.value === "" ? `no_name_product_${id}` : nameInput.value,
        src:
            linkInput.value !== ""
                ? linkInput.value
                : "src/assets/images/noimage.webp",
        price: priceInput.value === "" ? 0 : +priceInput.value,
    });

    render(DUMMY_PRODUCTS);
};

const getInputValue = (ev) => {
    if (ev.target.value.trim() === "") {
        return false;
    }

    return ev.target.value.trim();
};

const search = (ev) => {
    const inputValue = getInputValue(ev);

    if (!inputValue) {
        render(DUMMY_PRODUCTS);
    }

    console.log(inputValue);
    // DUMMY_PRODUCTS.filter();
};

addButton.addEventListener("click", addNewProduct);
searchInput.addEventListener("input", search);

render(DUMMY_PRODUCTS);
