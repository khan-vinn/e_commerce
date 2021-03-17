const ADD_PRODUCT_TO_CARD = "ADD_PRODUCT_TO_CARD";
const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

const initialState = [];

const CardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CARD:
            return state.concat(
                action.payload.filter((item) => state.indexOf(item) < 0)
            );
        case REMOVE_FROM_CARD:
            debugger
            return state;
        default:
            return state;
    }
};

export const addToCard = (payload) => ({ type: ADD_PRODUCT_TO_CARD, payload });
export const removeFromCard = (payload)=> ({type: REMOVE_FROM_CARD, payload})

export default CardReducer;
