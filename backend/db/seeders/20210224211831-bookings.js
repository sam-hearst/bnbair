'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Bookings', [
            {
                userId: 1,
                spotId: 2,
                startDate: "2021-5-16",
                endDate: "2021-5-21"
            },
            {
                userId: 1,
                spotId: 4,
                startDate: "2021-6-16",
                endDate: "2021-6-21"
            },
            {
                userId: 1,
                spotId: 7,
                startDate: "2021-5-20",
                endDate: "2021-5-26"
            },
            {
                userId: 1,
                spotId: 8,
                startDate: "2021-7-16",
                endDate: "2021-7-21"
            },
            {
                userId: 1,
                spotId: 6,
                startDate: "2021-6-10",
                endDate: "2021-6-17"
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Bookings', null, {});
    }
};
