import { csrfFetch } from './csrf';
import { addOneCity } from "./cities"


export const LOAD_SPOTS = 'spots/GET_SPOTS';
export const LOAD_SPOT = 'spot/GET_SPOT';
export const ADD_SPOT = 'spot/ADD_SPOT';

const load = (spots) => {
    return {
        type: LOAD_SPOTS,
        payload: spots
    };
};

const loadSpot = (spot) => {
    return {
        type: LOAD_SPOT,
        payload: spot
    }
}

const addSpot = (spot) => {
    return {
        type: ADD_SPOT,
        payload: spot
    }
}

export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();
    dispatch(load(data.spots));
    return data;
}

export const getOneSpot = (id) => async (dispatch) => {
    const numId = Number(id);
    const response = await csrfFetch(`/api/spots/${numId}`);
    const data = await response.json();
    dispatch(loadSpot(data.spot));
    return data
}

export const createSpot = payload => async (dispatch) => {
    console.log("hitting create spot route");
    const { name, address, city, zipCode, latLng, userId, pricePerNight, description, image } = payload;

    const formData = new FormData();
    formData.append('name', name);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("zipCode", zipCode);
    formData.append("latitude", latLng.lat);
    formData.append("longitude", latLng.lng);
    formData.append("userId", userId);
    formData.append("pricePerNight", pricePerNight);
    formData.append("description", description);


    if (image) formData.append('image', image);

    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(addSpot(data.newSpot));
        if (data.city) {
            dispatch(addOneCity(data.city));
        }
        return data;
    }
}

export const updateSpot = payload => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${payload.spotId}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addSpot(data.spot));
        return data;
    }
}


const initialState = {};

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS: {
            newState = {};
            action.payload.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState;
        }
        case LOAD_SPOT: {
            newState = {};
            action.payload.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState;
        }
        case ADD_SPOT: {
            newState = Object.assign({}, state, { [action.payload.id]: action.payload })
            return newState;
        }
        default:
            return state;
    }
};

export default spotsReducer;
