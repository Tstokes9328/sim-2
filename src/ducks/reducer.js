// Initial State

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    image: '',
    mortgage: '',
    desiredRent: ''
}

// Aciton Types

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";

    /* -- Empty State Action Type -- */

const RESET_STATE = "RESET_STATE";

// Action Creators

    /* -- Step One -- */
export function updateName(name){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state){
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZipcode(zip){
    return {
        type: UPDATE_ZIPCODE,
        payload: zip
    }
}

    /* -- Step Two -- */

export function updateImage(image){
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}

    /* -- Step Three -- */

export function updateMortgage(mortgage){
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent){
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

    /* -- Reset Action Creator -- */

export function resetState(){
    return {
        type: RESET_STATE,
        payload: initialState
    }
}

// Reducer Function

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return Object.assign({}, state, {name: action.payload});
            console.log(state.name)
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload});
            console.log(state.address)
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign({}, state, {state: action.payload});
        case UPDATE_ZIPCODE:
            return Object.assign({}, state, {zipcode: action.payload});
        case UPDATE_IMAGE:
            return Object.assign({}, state, {image: action.payload});
            console.log(state.image)
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload})
        case UPDATE_RENT:
            return Object.assign({}, state, {desiredRent: action.payload})
        case RESET_STATE:
            return Object.assign({}, state, {initialState: action.payload})
        default:
            return state
    }
}

// const UPDATE_NAME = "UPDATE_NAME";
// const UPDATE_ADDRESS = "UPDATE_ADDRESS";
// const UPDATE_CITY = "UPDATE_CITY";
// const UPDATE_STATE = "UPDATE_STATE";
// const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
