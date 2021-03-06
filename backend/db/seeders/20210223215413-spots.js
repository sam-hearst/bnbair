'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Spots', [
            {
                name: "Whole Apartment",
                address: "3845 Nobel Dr, San Diego, CA 92122",
                hostId: 1,
                pricePerNight: "79",
                description: "Beautiful 2 bedroom apartment located in amazing San Diego.  Renters have access to a pool and gym!",
                latitude: 32.7157,
                longitude: -117.1610
            },
            {
                name: "Tiny house on beach",
                address: "5 Lumber Lane, Bridgehampton, NY 11932",
                hostId: 2,
                pricePerNight: "138",
                description: "Rustic artist's loft 1/4 of a mile to Jitney, train, town, and Topping Rose House. This space is right off of the railroad tracks, so if you are sensitive to noise, I wouldn't suggest it. I would suggest this quaint and private loft to guests who are looking for a safe and clean retreat from the city that is centrally located. There is a private outdoor area outside your loft with a table and chairs. You can get a barbecue if you would like. Inside there is a full size refrigerator!",
                latitude: 40.9378,
                longitude: -72.3009
            },
            {
                name: "Entire Apartment in Cole Valley",
                address: "144 Parnassus Ave, San Francisco, CA 94117",
                hostId: 2,
                pricePerNight: "100",
                description: "Modern art-filled studio with polished cement floors right in the heart of downtown San Francisco. Conveniently located next to Whole Foods Market. The bay, ferry building, restaurants, and shopping are walking distance. The building has a beautiful rooftop patio with breath-taking views, plenty of seating and BBQ grills. Get ready to enjoy San Francisco like a local.",
                latitude: 37.7739,
                longitude: -122.4312
            },
            {
                name: "Entire serviced apartment",
                address: "3701 Quick Hill Rd, Austin, TX 78728",
                hostId: 3,
                pricePerNight: "53",
                description: "Stay for 30+ nights (minimum nights and rates are FIRM) where you’ll have the entire apartment all to yourself at The Village At Gracy Farms. The apartment has beautiful finishes and comes fully outfitted with kitchen, bedroom, & bathroom essentials. Please note, the furnishings & room details WILL VARY as the unit is set up for you upon booking. We are an experienced professional hospitality company that works directly with the property to transform vacant units into your home away from home.",
                latitude: 30.2666,
                longitude: -97.7333
            },
            {
                name: "Private room",
                address: "1900 SW 8th St, Miami, FL 33135",
                hostId: 3,
                pricePerNight: "145",
                description: "Beautiful place that you will really love!",
                latitude: 25.7616,
                longitude: -80.1917,
            },
            {
                name: "Shared room in house",
                address: "2264 W Ewing St, Los Angeles, CA 90039",
                hostId: 4,
                pricePerNight: "210",
                description: "Single spot in a shared room located by Hollywood Walk of Fame in the middle of everything. Our place is perfect option for students, young professionals and travelers who wants to explore Hollywood. Quiet & safe location, short walk to grocery stores, cafes & coffee shops. House has 5 mixed gander rooms, each can fit 4-6 guests , full kitchen. Self Check-In & Self Check-Out. Check-In Time: 4 PM - 10 PM STRICT. Parking is for extra fee.",
                latitude: 34.052235,
                longitude: -118.243683,
            },
            {
                name: "Beautiful Apartment",
                address: "9 Ann St, Newport, RI 02840",
                hostId: 1,
                pricePerNight: "178",
                description: "This nicely furnished second floor private apartment is located only a 10 minute walk from Eastons beach, cliff walk, and upper Broadway restaurants. A short walk to Braga park, 10 min bike ride to downtown. Full kitchen, bath and bedroom. Sleeper sofa and a fold out loveseat plus a futon mattress under the bed for extra guests. Beautiful front porch to enjoy. Free on street parking in front of the house. I live on the first floor and am available if needed.",
                latitude: 41.490578,
                longitude: -71.310196
            },
            {
                name: "Beautifully Furnished Condo",
                address: "200 W Commerce St, Dallas, TX 75208",
                hostId: 1,
                pricePerNight: "103",
                description: "Condo overlooking landscaped courtyard & water fountain. Spacious living & dining room. Amenities include: plantation shutters, ceiling fans, hardwood floors, designer colors, accent lighting & one assigned covered parking. Full size. Laundry Facility on the property. Wifi and Tv included. Great location to Knox Henderson restaurants & shops, SMU and the Katy Trail.",
                latitude: 32.7791,
                longitude: -96.8088
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Spots', null, {});
    }
};
