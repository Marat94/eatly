export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';

export function signInRequest(user) {
    return {
        type: SIGN_IN_REQUEST,
        payload: user
    };
}

export function signUpRequest(user) {
    return {
        type: SIGN_UP_REQUEST,
        payload: user
    };
}