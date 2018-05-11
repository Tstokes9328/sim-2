    /* Initial State */
const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  image: "",
  mortgage: "",
  monthlyRent: ""
};

    /* Reducer Function */
export default function reducer(state = initialState, action){
    switch(action.type){
        case CREATE_HOUSE:
            return Object.assign({}, state, {state: action.payload})
        default:
            return state;
    }
}


    /* Action Types */
const CREATE_HOUSE = "CREATE_HOUSE";




    /* Action Creators */
    export function stepOne(name, address, city, state, zipcode){
        return{
            type: CREATE_HOUSE,
            payload: {
                name,
                address,
                city,
                state,
                zipcode
            }
        }
    }