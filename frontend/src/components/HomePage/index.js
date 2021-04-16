import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSpots } from '../../store/spots';
import './HomePage.css';

function HomePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const spots = useSelector((state) => {
        return state.spots;
    })

    function convertAddress(address) {
        const piecesAddress = address.split(', ');
        const city = piecesAddress[1]
        const stateZip = piecesAddress[2];
        const state = stateZip.split(' ');
        return (`${city}, ${state[0]}`);
    }


    const spotsArr = Object.values(spots);

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
        <div className="homepage__main-container">
            <div className="homepage__main-image-container">
                <img src="https://images.contentstack.io/v3/assets/bltfa2cefdbe7482368/blt94377b78a7244fe7/5f7391c98c3821496a602665/GoNear_NY_2580w.jpg" />
                <h2>Discover</h2>
            </div>
            <div className="homepage__spots">
                <div className="homepage__recently-added">
                    <h2>Explore Anywhere</h2>
                    <div className="homepage__spots-container">
                        {spotsArr.map((spot) => {
                            return (
                                <Link key={spot.id} to={`spots/${spot.id}`}>
                                    <div key={spot.id} className="homepage__spot-container">
                                        {spot.Media && <img src={spot.Media[0].imageUrl} />}
                                        <span>{spot.name}</span>
                                        <span id="homepage__spot-city">{convertAddress(spot.address)}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
