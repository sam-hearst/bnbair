const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const City = db.City;
const Spot = db.Spot;
const Media = db.Media;
const Booking = db.Booking;

const router = express.Router();


router.post('/', asyncHandler(async (req, res) => {
    const { userId, spotId, bookingStartDate, bookingEndDate } = req.body;

    const booking = await Booking.create({
        userId,
        spotId,
        startDate: bookingStartDate,
        endDate: bookingEndDate
    });

    res.json({ booking })
}));


module.exports = router
