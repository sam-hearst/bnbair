import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { createBooking } from '../../store/bookings';
import { getOneSpot } from '../../store/spots';
import CalendarComponent from './CalendarComponent';
import './SpotPage.css';
require('dotenv').config();

function SpotPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [showCalendar, setShowCalendar] = useState(false);
    const [value, onChange] = useState(new Date());

    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector(state => state.spots[id]);

    function closeMenu() {
        return setShowCalendar(false);
    }

    async function handleSubmit() {
        let result = window.confirm("Are you sure you want to book this spot?")

        const payload = {
            userId: sessionUser.id,
            spotId: id,
            bookingStartDate: value[0],
            bookingEndDate: value[1]
        }

        if (result) {
            await dispatch(createBooking(payload));

            return <Redirect to={`/spots/${id}`} />
        }
    }



    useEffect(() => {
        dispatch(getOneSpot(id));


    }, [dispatch, id])

    if (!spot) {
        return null;
    }

    if (!sessionUser) {
        return <Redirect to='/login' />;
    }


    return (
        <div className="spot-container">
            <div className="spot__title">
                <h2>{`${spot?.name} in ${spot?.City.name}`}</h2>
            </div>
            <div className="spot-images-container">
                <div className="spot__image-main">
                    <img src={spot?.Media[0]?.imageUrl} />
                </div>
                <div className="spot-images">
                    <div className="spot__image-2">
                        <img src={spot?.Media[1]?.imageUrl} />
                    </div>
                    <div className="spot__image-3">
                        <img src={spot?.Media[2]?.imageUrl} />
                    </div>
                </div>
            </div>
            <div className="user-info">
                <span>Spot hosted by {sessionUser?.username}</span>
            </div>
            <div className="spot-info-bookings-container">
                <div className="spot-info">
                    <div className="spot__description">
                        <h3>Description</h3>
                        {spot.description}
                    </div>
                </div>
                <div className="calendar-container">
                    <div className="calendar-header">
                        <div className="price">
                            <span className="price-num">{spot.pricePerNight} </span>
                            <span className="price-text">/ night</span>
                        </div>
                    </div>
                    {!showCalendar && (
                        <button className="spot__book-spot"
                            onClick={() => setShowCalendar(true)}
                        >
                            Check Availability
                        </button>
                    )}
                    {showCalendar && (
                        <button className="spot__book-spot--confirm"
                            onClick={handleSubmit}
                        >
                            Confirm Booking
                        </button>
                    )}
                    {showCalendar && <CalendarComponent onChange={onChange} value={value} />}
                    <div className="close-cal" onClick={closeMenu}>{showCalendar ? `Close` : ''}</div>
                </div>
            </div>
        </div>
    )
}


export default SpotPage;
