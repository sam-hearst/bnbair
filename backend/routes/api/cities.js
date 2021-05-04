const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const City = db.City;
const Spot = db.Spot;
const Media = db.Media;

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    console.log("hitting the get cities backend!!")

    const cities = await City.findAll({
        limit: 8
    });

    res.json({ cities: cities })
}))

router.get("/:cityName", asyncHandler( async (req, res) => {
    console.log("hitting the get city backend!!")

    const { cityName } = req.params
    const alteredArr = cityName.split("-");

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const cappedArr = []

    for (let i = 0; i < alteredArr.length; i++) {
        let cityPart = alteredArr[i]
        let newStr = capitalizeFirstLetter(cityPart);
        cappedArr.push(newStr);
    }

    const altered = cappedArr.join(' ');

    const city = await City.findOne({
        where: {
            name: altered
        },
        include: {
            model: Spot,
            include: Media
        }
    })

    res.json({ city: city })
}))


module.exports = router
