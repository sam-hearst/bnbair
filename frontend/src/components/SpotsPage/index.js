import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getOneCity } from "../../store/cities"
import MapContainer from "../MapContainer/MapContainer"
import "./SpotsPage.css"

function SpotsPage() {
    const dispatch = useDispatch();
    const { cityName } = useParams();
    const city = useSelector(state => state.cities)
    const spotsArr = city.Spots

    function shortenedDescript(description) {
        return `${description.slice(0, 75)}...`
    }

    useEffect(() => {
        async function getCitySpots() {
            await dispatch(getOneCity(cityName))
        }

        getCitySpots();

    }, [dispatch, cityName])


    return (
        <div className="city-page-container">
            <div className="city-page__spots-container">
                <h1 className="city__title">{`Spots in ${city.name}`}</h1>
                <div className="city__spots-container">
                    {spotsArr && spotsArr.map((spot) => {
                        return (
                            <div key={spot.id} className="city__spot-container">
                                <Link to={`/spots/${spot.id}`}>
                                    <div className="city-page__spot-container">
                                        <div className="city-page__spot-img">
                                            <img src={spot.Media[0].imageUrl} />
                                        </div>
                                        <div className="city-page__spot-info">
                                            <span className="city__spot-name">{spot.name} in {city.name}</span>
                                            <span className="city__spot-desc">{shortenedDescript(spot.description)}</span>
                                            <span className="city__spot-price">{`$${spot.pricePerNight} / night`}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="city__map">
                <MapContainer cityLat={city.cityLat} cityLong={city.cityLong} spotsArr={spotsArr}/>
            </div>
        </div>
    )

}

export default SpotsPage
