import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getOneCity } from "../../store/cities"
import "./SpotsPage.css"

function SpotsPage() {
    const dispatch = useDispatch();
    const { cityName } = useParams();
    const city = useSelector(state => state.cities)
    const spotsArr = city.Spots
    console.log(city.Spots);

    useEffect(() => {
        async function getCitySpots() {
            await dispatch(getOneCity(cityName))
        }

        getCitySpots();

    }, [dispatch, cityName])


    return (
        <div className="city-container">
        <div>I'm working</div>
        <div className="homepage__spots-container">
                        {spotsArr && spotsArr.map((spot) => {
                            return (
                                <Link key={spot.id} to={`/spots/${spot.id}}`}>
                                    <div className="cities-page__spot-container">
                                        <span>{spot.name}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
        </div>
    )

}

export default SpotsPage
