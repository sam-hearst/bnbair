const express = require('express');
const asyncHandler = require('express-async-handler');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');
const db = require('../../db/models');
const Spot = db.Spot;
const Media = db.Media;
const City = db.City;
const User = db.User;


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
        include: Media,
        limit: 8
    });

    res.json({ spots: spots })
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const spot = [];
    const id = req.params.id

    const spotObj = await Spot.findByPk(id, {
        include: [Media, City, User]
    })

    spot.push(spotObj);

    res.json({ spot });
}))

router.post('/', singleMulterUpload("image"), asyncHandler(async (req, res) => {
    console.log('req.body', req.body);
    console.log('req.file', req.file);
    const { name, address, city, zipCode, latitude, longitude, userId, pricePerNight, description } = req.body;
    const imgUrl = await singlePublicFileUpload(req.file);


    const cityLat = latitude.slice(0, 8);
    const cityLong = longitude.slice(0, 8);
    let rightCity;

    // check if city is already a city... if it isn't then create new city

    const isCity = await City.findAll({
        where: {
            name: city,
        }
    });

    rightCity = isCity[0]

    if (!isCity.length) {
        const randomCityImgUrls = [
            "https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=720",
            "https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=720",
            "https://a0.muscache.com/im/pictures/08b33515-49eb-4b9b-8e60-f962fb7e700b.jpg?im_q=medq&im_w=720",
            "https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=720",
            "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720",
        ]

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        let idx = getRandomInt(randomCityImgUrls.length); 
        console.log("idx", idx);

        rightCity = await City.create({
            name: city,
            cityImgUrl: randomCityImgUrls[idx],
            state: "New York",
            cityLat: cityLat,
            cityLong: cityLong,
        })
    }
    const spot = await Spot.create({
        name,
        address: address.split(", ")[0],
        zipCode: zipCode,
        cityId: rightCity.id,
        hostId: userId,
        pricePerNight,
        description,
        latitude: latitude,
        longitude: longitude
    })

    const media = await Media.create({
        spotId: spot.id,
        imageUrl: imgUrl
    });

    const newSpot = await Spot.findByPk(spot.id, {
        include: Media
    });

    if (!isCity.length) { // if its a new city... must return city and spot
        return res.json({ newSpot, city: rightCity })
    }
    res.json({ newSpot });
}))

router.put('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, address, userId, pricePerNight, description } = req.body;

    const rightSpot = await Spot.findByPk(id);

    await rightSpot.update({
        name,
        address,
        hostId: userId,
        pricePerNight,
        description
    })

    const spot = await Spot.findByPk(id, {
        include: Media
    })

    res.json({ spot });
}))


module.exports = router;
