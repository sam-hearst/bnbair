import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateSpot, } from '../../store/spots';
import './EditSpotForm.css';


function EditSpotForm({ spot }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState(spot.name);
    const [address, setAddress] = useState(spot.address);
    const [pricePerNight, setPricePerNight] = useState(spot.pricePerNight);
    const [description, setDescription] = useState(spot.description);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            spotId: spot.id,
            name,
            address,
            userId: sessionUser.id,
            pricePerNight,
            description,
        }

        await dispatch(updateSpot(payload));
        setName('');
        setAddress('');
        setPricePerNight('');
        setDescription('');
        setErrors([]);

        history.push('/');
    }



    return (
        <div className="edit-spot__container">
            <div className="signup__header">
                Edit your spot
            </div>
            <div className="signup__text-intro"></div>
            <div className="signup__form-container">
                <form onSubmit={handleSubmit} id="signup__form">
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className="signup__input-fields">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="name"
                        />
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            placeholder="address"
                        />
                        <input
                            type="text"
                            value={pricePerNight}
                            onChange={(e) => setPricePerNight(e.target.value)}
                            required
                            placeholder="Price per night"
                        />
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            placeholder="description"
                        />
                    </div>
                    <div className="signup__form-btn">
                        <button type="submit" id="signup-btn">Edit your Spot</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditSpotForm;
