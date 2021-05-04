'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Spots', [
            {
                name: "Whole Apartment",
                address: "3845 Nobel Dr",
                zipCode: 11954,
                cityId: 1,
                hostId: 1,
                pricePerNight: "79",
                description: "Beautiful 2 bedroom apartment located in amazing Montauk.  Renters have access to a pool and gym!",
                latitude: 32.7157,
                longitude: -117.1610
            },
            {
                name: "Tiny house on beach",
                address: "5 Lumber Lane",
                zipCode: 11932,
                cityId: 2,
                hostId: 2,
                pricePerNight: "138",
                description: "Rustic artist's loft 1/4 of a mile to Jitney, train, town, and Topping Rose House. This space is right off of the railroad tracks, so if you are sensitive to noise, I wouldn't suggest it. I would suggest this quaint and private loft to guests who are looking for a safe and clean retreat from the city that is centrally located. There is a private outdoor area outside your loft with a table and chairs. You can get a barbecue if you would like. Inside there is a full size refrigerator!",
                latitude: 40.9378,
                longitude: -72.3009
            },
            {
                name: "Entire Apartment",
                address: "144 Parnassus Ave",
                zipCode: 33852,
                cityId: 3,
                hostId: 2,
                pricePerNight: "100",
                description: "Modern art-filled studio with polished cement floors right in the heart of Garrison. Conveniently located next to Whole Foods Market. The bay, ferry building, restaurants, and shopping are walking distance. The building has a beautiful rooftop patio with breath-taking views, plenty of seating and BBQ grills. Get ready to enjoy Garrison like a local.",
                latitude: 37.7739,
                longitude: -122.4312
            },
            {
                name: "Entire serviced apartment",
                address: "3701 Quick Hill Rd",
                zipCode: 33852,
                cityId: 4,
                hostId: 3,
                pricePerNight: "53",
                description: "Stay for 30+ nights (minimum nights and rates are FIRM) where you’ll have the entire apartment all to yourself at The Village At Gracy Farms. The apartment has beautiful finishes and comes fully outfitted with kitchen, bedroom, & bathroom essentials. Please note, the furnishings & room details WILL VARY as the unit is set up for you upon booking. We are an experienced professional hospitality company that works directly with the property to transform vacant units into your home away from home.",
                latitude: 30.2666,
                longitude: -97.7333
            },
            {
                name: "Private room",
                address: "1900 SW 8th St",
                zipCode: 12534,
                cityId: 5,
                hostId: 3,
                pricePerNight: "145",
                description: "Beautiful place that you will really love!",
                latitude: 25.7616,
                longitude: -80.1917,
            },
            {
                name: "Shared room in house",
                address: "2264 W Ewing St",
                zipCode: 14850,
                cityId: 6,
                hostId: 4,
                pricePerNight: "210",
                description: "Single spot in a shared room located in Ithaca in the middle of everything. Our place is perfect option for students, young professionals and travelers who wants to explore Ithaca. Quiet & safe location, short walk to grocery stores, cafes & coffee shops. House has 5 mixed gander rooms, each can fit 4-6 guests , full kitchen. Self Check-In & Self Check-Out. Check-In Time: 4 PM - 10 PM STRICT. Parking is for extra fee.",
                latitude: 34.052235,
                longitude: -118.243683,
            },
            {
                name: "Beautiful Apartment",
                address: "9 Ann St",
                zipCode: 12498,
                cityId: 7,
                hostId: 1,
                pricePerNight: "178",
                description: "This nicely furnished second floor private apartment is located only a 10 minute walk from Eastons beach, cliff walk, and upper Broadway restaurants. A short walk to Braga park, 10 min bike ride to downtown. Full kitchen, bath and bedroom. Sleeper sofa and a fold out loveseat plus a futon mattress under the bed for extra guests. Beautiful front porch to enjoy. Free on street parking in front of the house. I live on the first floor and am available if needed.",
                latitude: 41.490578,
                longitude: -71.310196
            },
            {
                name: "Beautifully Furnished Condo",
                address: "200 W Commerce St",
                zipCode: 10804,
                cityId: 8,
                hostId: 1,
                pricePerNight: "103",
                description: "Condo overlooking landscaped courtyard & water fountain. Spacious living & dining room. Amenities include: plantation shutters, ceiling fans, hardwood floors, designer colors, accent lighting & one assigned covered parking. Full size. Laundry Facility on the property. Wifi and Tv included. Great location to Knox Henderson restaurants & shops, SMU and the Katy Trail.",
                latitude: 32.7791,
                longitude: -96.8088
            },
            {
                name: "Beautifully Furnished Home",
                address: "4 Covey Ct",
                zipCode: 11937,
                cityId: 2,
                hostId: 1,
                pricePerNight: "205",
                description: "House overlooking landscaped courtyard. Spacious living & dining room. Amenities include: ceiling fans, hardwood floors, designer colors, accent lighting & tons of parking. Full size. Wifi and Tv included. Great location to restaurants in EH.",
                latitude: 40.9634,
                longitude: -72.1847
            },
            {
                name: "Amazing home",
                address: "73 Chapman Rd",
                zipCode: 10524,
                cityId: 3,
                hostId: 1,
                pricePerNight: "335",
                description: "House in garrison on a great property.  Spacious rooms and right off indian lake.  Great for a family or two-person stay. House has beautiful views and great places to explore!",
                latitude: 41.382150,
                longitude: -73.883810
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Spots', null, {});
    }
};
