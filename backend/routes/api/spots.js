const express = require('express');
const asyncHandler = require('express-async-handler');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');
const db = require('../../db/models');
const Spot = db.Spot;
const Media = db.Media;


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
        include: Media
    })

    spot.push(spotObj);

    res.json({ spot });
}))

router.post('/', singleMulterUpload("image"), asyncHandler(async (req, res) => {
    console.log('req.body', req.body);
    console.log('req.file', req.file);
    const { name, address, userId, pricePerNight, description } = req.body;
    const imgUrl = await singlePublicFileUpload(req.file);

    const spot = await Spot.create({
        name,
        address,
        hostId: userId,
        pricePerNight,
        description
    })

    const media = await Media.create({
        spotId: spot.id,
        imageUrl: imgUrl
    });

    const newSpot = await Spot.findByPk(spot.id, {
        include: Media
    });


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
