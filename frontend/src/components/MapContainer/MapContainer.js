import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import "./Map.css"
require('dotenv').config();


const MapContainer = ({ cityLat, cityLong, spotsArr }) => {

    const locationsArr = spotsArr?.map((spot) => {
        return {
            name: spot.name,
            location: {
                lat: Number(spot.latitude),
                lng: Number(spot.longitude)
            }
        }
    })

    console.log(locationsArr);

    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 40.96340,
                lng: -72.18470
            },
        },
        {
            name: "Location 2",
            location: {
                lat: 41.3917,
                lng: 2.1649
            },
        },
        {
            name: "Location 3",
            location: {
                lat: 41.3773,
                lng: 2.1585
            },
        },
        {
            name: "Location 4",
            location: {
                lat: 41.3797,
                lng: 2.1682
            },
        },
        {
            name: "Location 5",
            location: {
                lat: 41.4055,
                lng: 2.1915
            },
        }
    ];

    const mapStyles = {
        height: "89%",
        width: "50%",
        position: "fixed !important"
    };

    const defaultCenter = {
        lat: Number(cityLat), lng: Number(cityLong)
    }



    return (
        <GoogleMap
            id="map"
            mapContainerStyle={mapStyles}
            zoom={11}
            center={defaultCenter}>
            {
                locationsArr && locationsArr.map(item => {
                    return (
                        <Marker key={item.name} position={item.location} />
                    )
                })
            }
        </GoogleMap>
    )
}


export default MapContainer;
