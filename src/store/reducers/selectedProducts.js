const ADD_PRODUCT_TO_CARD = "ADD_PRODUCT_TO_CARD";
const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

const initialState = [];

const SelectedProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CARD:
            return state
                .concat(state.includes(action.payload) ? null : action.payload)
                .filter(Number);
        case REMOVE_FROM_CARD:
            return state.filter(
                (elem) => elem !== action.payload && typeof elem === "number"
            );
        default:
            return state;
    }
};

export const addToCard = (payload) => ({ type: ADD_PRODUCT_TO_CARD, payload });
export const removeFromCard = (payload) => ({
    type: REMOVE_FROM_CARD,
    payload,
});

export default SelectedProductsReducer;
