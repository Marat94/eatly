import {SIGN_IN_REQUEST, SIGN_UP_REQUEST} from '../actions/users';

const initialState = {};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_REQUEST: {
            return {
                ...state,
                user: action.payload.user
            };
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                user: action.payload.user,
            };
        }
        default: {
            return state;
        }
    }
}






















