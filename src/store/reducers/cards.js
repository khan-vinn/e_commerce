const initialState = {};
const INITIALIZE_CARDS = "INITIALIZE_CARDS";

const CardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INITIALIZE_CARDS:
            return { ...state, ...payload };

        default:
            return state;
    }
};
export default CardReducer;

export const InitializeCard = (payload) => ({
    type: INITIALIZE_CARDS,
    payload,
});
