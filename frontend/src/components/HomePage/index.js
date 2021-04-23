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
                <img src="https://images.contentstack.io/v3/assets/bltfa2cefdbe7482368/blt94377b78a7244fe7/5f7391c98c3821496a602665/GoNear_NY_2580w.jpg" />
                <h2>Discover</h2>
            </div>
            <div className="homepage__spots">
                <div className="homepage__recently-added">
                    <h2>Explore NY</h2>
                    <div className="homepage__spots-container">
                        {citiesArr && citiesArr.map((city) => {
                            return (
                                <div key={city.id} className="homepage__spot-container">
                                    <Link to={`/cities/${convertCityName(city?.name)}`}>
                                        {city.cityImgUrl && <img src={city.cityImgUrl} />}
                                        <span>{city.name}</span>
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
