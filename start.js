const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Amigurumi Paradise",
        description:
            "API para el ecommerce de la página Amigurumi Paradise",
    },
    host: "localhost:8500",
    schemes: ["http", "https"],
    definitions: {
        AddUser: {
            email: "test@test.com",
            name: "Roy",
            last_name: "Munoz",
            password: "test",
        },
        AddProduct: {
            name: "Nombre del producto",
            price: 9999,
            num_available: 9999,
            description: "Lorem ipsum",
            picture: "https://domain.com/picture.jpg",
        },
    },
};

const outputFile = "./swagger.json";
const endpointFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
    require("./server.js");
});
