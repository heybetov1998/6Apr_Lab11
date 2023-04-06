const products = document.querySelector("#products");

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
        price: 20,
    },
    {
        id: 3,
        name: "Product 3",
        src: "src/assets/images/prod3.jpeg",
        price: 30,
    },
    {
        id: 4,
        name: "Product 4",
        src: "src/assets/images/prod4.webp",
        price: 30,
    },
];

const render = () => {
    for (const product of DUMMY_PRODUCTS) {
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

render();