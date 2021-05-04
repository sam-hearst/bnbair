import { csrfFetch } from './csrf';


const LOAD_CITIES = 'cities/GET_CITIES';
const LOAD_CITY = 'city/GET_CITY';
const ADD_CITY = "city/ADD_CITY"

const loadCities = (cities) => {
    return {
        type: LOAD_CITIES,
        payload: cities
    };
};

const loadCity = (city) => {
    return {
        type: LOAD_CITY,
        payload: city
    }
}

export const addOneCity = (city) => {
    return {
        type: ADD_CITY,
        payload: city
    }
}

export const getCities = () => async (dispatch) => {
    const response = await csrfFetch('/api/cities');
    const data = await response.json();
    dispatch(loadCities(data.cities));
    return data;
}

export const getOneCity = (cityName) => async (dispatch) => {
    const response = await csrfFetch(`/api/cities/${cityName}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(loadCity(data.city));
        return data
    }
}


const initialState = {};

const citiesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_CITIES: {
            newState = {};
            action.payload.forEach(city => {
                newState[city.id] = city
            })
            return newState;
        }
        case LOAD_CITY: {
            newState = {...action.payload};
            return newState;
        }
        case ADD_CITY: {
            newState = Object.assign({}, state, { [action.payload.id]: action.payload })

            return newState;
        }
        default:
            return state;
    }
};

export default citiesReducer;
