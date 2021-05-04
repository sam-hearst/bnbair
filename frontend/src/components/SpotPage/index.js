import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOneSpot } from '../../store/spots';
import CalendarComponent from './CalendarComponent';
import './SpotPage.css';
require('dotenv').config();

function SpotPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector(state => state.spots[id]);



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
                <h2>{`${spot.name} in ${spot?.City.name}`}</h2>
            </div>
            <div className="spot__images">
                {spot.Media && spot.Media.map((image) => {
                    return (
                        <div key={image.id} className="spot__image">
                            <img src={image.imageUrl} />
                        </div>
                    )
                })}
            </div>
            <div className="spot__description">
                <h3>Description</h3>
                {spot.description}
            </div>
            <div className="spot__price">
                <h3>Price</h3>
                <span>{`$${spot.pricePerNight}/ night`}</span>
            </div>
            <CalendarComponent />
        </div>
    )
}


export default SpotPage;
