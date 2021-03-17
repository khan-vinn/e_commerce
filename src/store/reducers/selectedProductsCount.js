const ADD_PRODUCT_COUNT_TO_CARD = "ADD_PRODUCT_COUNT_TO_CARD";
const REMOVE_COUNT_FROM_CARD = "REMOVE_COUNT_FROM_CARD";
const INITIALIZE_PRODUCT_COUNT = "INITIALIZE_PRODUCT_COUNT";

const initialState = [];

const SelectedProductsCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_COUNT_TO_CARD:
            return state
                .map((elem) => {
                    if (elem.id === action.payload.id) {
                        elem.count = action.payload.count;
                        return elem;
                    } else {
                        return null;
                    }
                })
                .filter(Object);
        case INITIALIZE_PRODUCT_COUNT:
            return [
                ...state,
                { id: action.payload.id, count: action.payload.count },
            ];
        case REMOVE_COUNT_FROM_CARD:
            return state
                .map((elem) => {
                    if (elem.id === action.payload.id) {
                        return null;
                    } else {
                        return elem;
                    }
                })
                .filter(Object);
        default:
            return state;
    }
};

export const addCountToCard = (payload) => ({
    type: ADD_PRODUCT_COUNT_TO_CARD,
    payload,
});
export const initializeProductCount = (payload) => ({
    type: INITIALIZE_PRODUCT_COUNT,
    payload,
});
export const removeCountFromCard = (payload) => ({
    type: REMOVE_COUNT_FROM_CARD,
    payload,
});

export default SelectedProductsCountReducer;
