import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOneSpot } from '../../store/spots';
import EditSpotForm from '../EditSpotForm/index';
import MapContainer from '../MapContainer/MapContainer';
import CalendarComponent from './CalendarComponent';
import './SpotPage.css';
require('dotenv').config();

function SpotPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [showEditSpotForm, setShowEditSpotForm] = useState(false);


    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector(state => state.spots[id]);



    useEffect(() => {
        setShowEditSpotForm(false);


        dispatch(getOneSpot(id));
    }, [dispatch, id])

    if (!spot) {
        return null;
    }

    if (!sessionUser) {
        return <Redirect to='/login' />;
    }

    let content = null;

    if (sessionUser.id === spot.hostId) {
        if (showEditSpotForm) {
            content = (
                <EditSpotForm spot={spot} />
            )
        } else {
            content = (
                <div className="spot__host-spot">
                    <div className="spot__name-img-map-container">
                        <div className="spot__name-img">
                            <div className="spot__name">
                                <h2>{`${spot.name} in ${spot.address.split(', ')[1]}`}</h2>
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
                        </div>
                        <div className="spot__map">
                            <MapContainer latitude={spot.latitude} longitude={spot.longitude} />
                        </div>
                    </div>
                    <div className="spot__description">
                        <h3>Description</h3>
                        {spot.description}
                    </div>
                    <div className="spot__price">
                        <h3>Price</h3>
                        <span>{`$${spot.pricePerNight}/ night`}</span>
                    </div>
                    <button className="spot__edit-spot" onClick={() => setShowEditSpotForm(true)}>Edit</button>
                </div>
            )
        }
    } else {
        content = (
            <div className="spot__bookable-spot">
                <div className="spot__name-img-map-container">
                    <div className="spot__name-img">
                        <div className="spot__name">
                            <h2>{`${spot.name} in ${spot.address.split(', ')[1]}`}</h2>
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
                    </div>
                    <div className="spot__map">
                        <MapContainer latitude={spot.latitude} longitude={spot.longitude} />
                    </div>
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



    return (
        <div className="spot__page-container">
            {content}
        </div>
    )
}

export default SpotPage;
