import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import AddressSearch from "./AddressSearch"
import { useDispatch, useSelector } from "react-redux";
import { createSpot } from '../../store/spots';

function AddSpotForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [pricePerNight, setPricePerNight] = useState('');
    const [description, setDescription] = useState('');
    const [latLng, setLatLng ] = useState({})
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([]);




    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            address,
            city: address.split(", ")[1],
            zipCode: address.split(", ")[2].split(' ')[1],
            latLng: latLng,
            userId: sessionUser.id,
            pricePerNight,
            description,
            image
        }

        await dispatch(createSpot(payload));
        history.push('/');

        setName('');
        setAddress('');
        setLatLng({})
        setPricePerNight('');
        setDescription('');
        setImage(null);
        setErrors([]);
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    }


    return (
        <>

            <div className="signup-container">
                <div className="signup__header">
                    Add your spot
            </div>
                <div className="signup__text-intro">Please fill out the information below</div>
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
                                placeholder="Name"
                            />
                            <AddressSearch setAddress={setAddress} address={address} setLatLng={setLatLng}
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
                                placeholder="Description"
                            />
                            <label>
                                <input
                                    type="file"
                                    onChange={updateFile}
                                />
                            </label>
                        </div>
                        <div className="signup__form-btn">
                            <button type="submit" id="signup-btn">Add Spot</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddSpotForm;
