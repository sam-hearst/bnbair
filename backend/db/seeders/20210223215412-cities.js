'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cities', [
            {
                name: 'Montauk',
                cityImgUrl: "https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=720"
            },
            {
                name: 'East Hampton',
                cityImgUrl: "https://a0.muscache.com/im/pictures/c2eba2e9-0d80-4704-9e2c-34ac16316c53.jpg?im_q=medq&im_w=720"
            },
            {
                name: 'Lake Placid',
                cityImgUrl: "https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=720"
            },
            {
                name: 'Southampton',
                cityImgUrl: "https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=720"
            },
            {
                name: 'Hudson',
                cityImgUrl: "https://a0.muscache.com/im/pictures/3d541658-fb05-4316-af26-b8c1337fbe8c.jpg?im_q=medq&im_w=720"
            },
            {
                name: 'Ithaca',
                cityImgUrl: "https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=720"
            },
            {
                name: 'Woodstock',
                cityImgUrl: "https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=720"
            },
            {
                name: 'Rye',
                cityImgUrl: "https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=720"
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Cities', null, {});
    }
};
