'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Media', [
            {
                spotId: 2,
                imageUrl: "https://a0.muscache.com/im/pictures/5e32753d-0dfc-451d-ae3e-afcb27a268e9.jpg?im_w=720"
            },
            {
                spotId: 2,
                imageUrl: "https://a0.muscache.com/im/pictures/5309e3e3-458a-45f8-9edc-4a2c4e4923e8.jpg?im_w=720"
            },
            {
                spotId: 2,
                imageUrl: "https://a0.muscache.com/im/pictures/9eb7ced6-e3e2-46b7-8f7c-2ae63270351f.jpg?im_w=720"
            },
            {
                spotId: 1,
                imageUrl: "https://a0.muscache.com/im/pictures/7370ce2e-b1de-4672-8ceb-ebf239d6d0d1.jpg?im_w=720"
            },
            {
                spotId: 1,
                imageUrl: "https://a0.muscache.com/im/pictures/4dbe557d-29ab-4431-8846-616ce80e2a7a.jpg?im_w=720"
            },
            {
                spotId: 1,
                imageUrl: "https://a0.muscache.com/im/pictures/cdd28787-cad6-45bd-80d4-23056266907a.jpg?im_w=720"
            },
            {
                spotId: 3,
                imageUrl: "https://a0.muscache.com/im/pictures/08b3fdfd-0474-46b2-a30e-7b5fd6a3194d.jpg?im_w=720"
            },
            {
                spotId: 3,
                imageUrl: "https://a0.muscache.com/pictures/854ffca6-8038-4917-a259-f05109c0624b.jpg"
            },
            {
                spotId: 3,
                imageUrl: "https://a0.muscache.com/im/pictures/6cfa57ea-e7ba-450f-a3a5-ddfe05ec403a.jpg?im_w=720"
            },
            {
                spotId: 4,
                imageUrl: "https://a0.muscache.com/im/pictures/ef5c78e7-c143-4a79-8cc3-36efdcb65d3d.jpg?im_w=720"
            },
            {
                spotId: 4,
                imageUrl: "https://a0.muscache.com/im/pictures/00f0b93e-cded-4ebb-a859-35887c832967.jpg?im_w=720"
            },
            {
                spotId: 4,
                imageUrl: "https://a0.muscache.com/im/pictures/b1088764-22da-450a-a342-5e8b3d9c48dd.jpg?im_w=720"
            },
            {
                spotId: 5,
                imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-48053423/original/2b770387-5813-40db-b433-80deb34b20a7.jpeg?im_w=720"
            },
            {
                spotId: 5,
                imageUrl: "https://a0.muscache.com/im/pictures/5aa2e07e-e91b-4924-8e62-47a54e48e097.jpg?im_w=720"
            },
            {
                spotId: 5,
                imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-48053423/original/2948e417-fcf6-4c76-b8d4-f2de6de5d94d.jpeg?im_w=720"
            },
            {
                spotId: 6,
                imageUrl: "https://a0.muscache.com/im/pictures/0e01db3b-b1e2-44bd-b03f-9c51155342ec.jpg?im_w=720"
            },
            {
                spotId: 6,
                imageUrl: "https://a0.muscache.com/im/pictures/f0d650cc-dec0-4354-8bd3-6bc9b000f2e5.jpg?im_w=720"
            },
            {
                spotId: 6,
                imageUrl: "https://a0.muscache.com/im/pictures/ebba71dc-e518-480d-a751-2cbe4d2db0c0.jpg?im_w=720"
            },
            {
                spotId: 7,
                imageUrl: "https://a0.muscache.com/im/pictures/4019226f-7ebe-4a9f-b44d-6bf1703acb5a.jpg?im_w=720"
            },
            {
                spotId: 8,
                imageUrl: "https://a0.muscache.com/im/pictures/8203e63e-d436-40ac-9683-feba561d675e.jpg?im_w=720"
            },
            {
                spotId: 9,
                imageUrl: "https://a0.muscache.com/im/pictures/d2441d16-99e8-47fc-b69b-cf01ca5a1c22.jpg?im_w=720",
            },
            {
                spotId: 9,
                imageUrl: "https://a0.muscache.com/im/pictures/6de5ce76-28c1-4ba3-a415-26e7445adabc.jpg?im_w=720"
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Media', null, {});

    }
};
