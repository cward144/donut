let uuid = require("uuid");

// Get more donuts from https://www.krispykreme.com/menu/doughnuts

const initialData = [
    {
        id: uuid.v4(),
        name: "Apple Fritter",
        category: "Glazed",
        imageURL: "https://www.krispykreme.com/getattachment/e84619be-bce0-4239-8352-2117e1b66ad0/Apple-Fritter.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Chocolate Iced Glazed",
        category: "Iced,Glazed",
        imageURL: "https://www.krispykreme.com/getattachment/9041db26-95ee-40e4-a069-1b6ca8d13b13/Chocolate-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Chocolate Iced Glazed with Sprinkles",
        category: "Iced,Glazed",
        imageURL: "https://www.krispykreme.com/getattachment/07b4475d-4282-4729-a425-0bb24cd26f4d/Chocolate-Iced-Glazed-with-Sprinkles.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Chocolate Iced with Filling",
        category: "Iced,Glazed,Filled",
        imageURL: "https://www.krispykreme.com/getattachment/2921a3c7-350a-4077-8194-5c8900a9a940/Chocolate-Iced-Custard-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Rasberry Iced with Filling",
        category: "Iced,Glazed,Filled",
        imageURL: "https://www.krispykreme.com/getattachment/2453215a-619a-40bd-a64b-1696f533d199/Glazed-Raspberry-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Lemon Iced with Filling",
        category: "Iced,Glazed,Filled",
        imageURL: "https://www.krispykreme.com/getattachment/0bd48216-d5a8-4838-885e-1e643a3a0e36/Glazed-Lemon-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Chocolate Iced Cruller",
        category: "Iced,Glazed",
        imageURL: "https://www.krispykreme.com/getattachment/9e6fd86b-c813-46ef-be32-6526422998b5/Chocolate-Iced-Glazed-Cruller.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Maple Iced Glazed",
        category: "Iced,Glazed",
        imageURL: "https://www.krispykreme.com/getattachment/dc92076b-0766-42c2-b6f4-63000e0f7af9/Maple-Iced-Glazed.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Cake Batter",
        category: "Iced",
        imageURL: "https://www.krispykreme.com/getattachment/7671b2a8-442c-4fbc-80ea-ef21d16c6673/Cake-Batter-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Glazed Cinnamon Roll",
        category: "Glazed",
        imageURL: "https://www.krispykreme.com/getattachment/3bd0c423-802b-4f5f-8b3f-c5ade48c25f7/Original-Glazed-Cinnamon-Roll.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Original Glazed",
        category: "Glazed",
        imageURL: "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Traditional Cake",
        category: "Cake",
        imageURL: "https://www.krispykreme.com/getattachment/d4841d35-ba1e-4708-9549-4dc52793ed39/Traditional-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Powdered Cake",
        category: "Cake",
        imageURL: "https://www.krispykreme.com/getattachment/fb68570f-4549-45ae-a269-e45023b64695/Powdered-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Powdered Cinnamon Cake",
        category: "Cake",
        imageURL: "https://www.krispykreme.com/getattachment/56792d34-6537-427d-abdb-401bba948a80/Powdered-Cinnamon-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Glazed Blueberry Cake",
        category: "Glazed,Cake",
        imageURL: "https://www.krispykreme.com/getattachment/6b57c2f3-b56b-4b6c-8828-c63d0f99e32c/Glazed-Blueberry-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Powdered Strawberry Filled",
        category: "Filled",
        imageURL: "https://www.krispykreme.com/getattachment/de7437d4-9d1a-40f3-b453-c5e511da0c4c/Powdered-Strawberry-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Powdered Strawberry Cream Filled",
        category: "Filled",
        imageURL: "https://www.krispykreme.com/getattachment/ab902bc0-3d50-4a7e-aca2-f90c07f68bd1/Powdered-with-Strawberry-Kreme.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
    {
        id: uuid.v4(),
        name: "Powdered Lemon Cream Filled",
        category: "Filled",
        imageURL: "https://www.krispykreme.com/getattachment/5a180ed8-b70c-4f68-bb51-63ec4952da0c/Powdered-with-Lemon-Kreme.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    },
]

module.exports = initialData