import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCities } from '../../store/cities';
import './HomePage.css';

function HomePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const cities = useSelector((state) => {
        return state.cities;
    })

    function convertCityName(city) {
        const altered = city?.split(' ').join("-").toLowerCase();
        return (`${altered}`);
    }


    const citiesArr = Object.values(cities);

    useEffect(() => {
        dispatch(getCities());
    }, [dispatch]);

    return (
        <div className="homepage__main-container">
            <div className="homepage__main-image-container">
                <img src="https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=1920" />
                <h2>Discover New York</h2>
            </div>
            <div className="homepage__spots">
                <div className="homepage__recently-added">
                    <h2>Explore Nearby</h2>
                    <div className="homepage__spots-container">
                        {citiesArr && citiesArr.map((city) => {
                            return (
                                <div key={city.id} className="homepage__spot-container">
                                    <Link to={`/cities/${convertCityName(city?.name)}`}>
                                        {city.cityImgUrl && <img src={city.cityImgUrl} />}
                                        <div>
                                            <span>{city.name}</span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePage;
