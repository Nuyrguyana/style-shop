const products = {
    dress: {
        id: "1",
        description: "",
        size: "",
        sex: "",
    },
    skirt: {
        id: "2",
        description: "",
        size: "",
        sex: "",
    },
    pullover: {
        id: "3",
        description: "",
        size: "",
        sex: "",
    },
    accessories: {
        id: "4",
        description: "",
        size: "",
        sex: "",
    },
    shoes: {
        id: "5",
        description: "",
        size: "",
        sex: "",
    },
    jacket: {
        id: "6",
        description: "",
        size: "",
        sex: "",
    },
    Tshirt: {
        id: "7",
        description: "",
        size: "",
        sex: "",
    }
}

if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem('products')));
        }, 2000);
    });

export default
fetchAll()