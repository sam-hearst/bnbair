import { csrfFetch } from './csrf';

export const LOAD_BOOKINGS = 'spots/GET_BOOKINGs';
export const LOAD_BOOKING = 'spot/GET_BOOKING';
export const ADD_BOOKING = 'spot/ADD_BOOKING';

const loadBookings = (bookings) => {
    return {
        type: LOAD_BOOKINGS,
        payload: bookings
    };
};

const loadBooking = (booking) => {
    return {
        type: LOAD_BOOKING,
        payload: booking
    }
}

const bookASpot = (booking) => {
    return {
        type: ADD_BOOKING,
        payload: booking
    }
}


export const getBookings = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/user/${userId}`);
    const data = await response.json();
    dispatch(loadBookings(data.bookings));
    return data;
}


export const getOneBooking = (bookingId) => async (dispatch) => {
    const numId = Number(bookingId);
    const response = await csrfFetch(`/api/bookings/${bookingId}`);
    const data = await response.json();
    dispatch(loadBooking(data.booking));
    return data
}


export const createBooking = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/bookings/', {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(bookASpot(data.booking));
        return data;
    }
}



const initialState = {};

const bookingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_BOOKINGS: {
            newState = {};
            action.payload.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState;
        }
        case LOAD_BOOKING: {
            newState = {};
            action.payload.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState;
        }
        case ADD_BOOKING: {
            newState = Object.assign({}, state, { [action.payload.id]: action.payload })
            return newState;
        }
        default:
            return state;
    }
};

export default bookingsReducer;
