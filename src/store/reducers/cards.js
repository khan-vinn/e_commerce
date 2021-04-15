const initialState = [];
const INITIALIZE_CARDS = "INITIALIZE_CARDS";
let id = 0;
let idIncr = () => {
    id++;
    return id;
};
const CardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INITIALIZE_CARDS:
            return state.concat({ id: idIncr(), field: payload });
        default:
            return state;
    }
};
export default CardReducer;

export const InitializeCard = (payload) => ({
    type: INITIALIZE_CARDS,
    payload,
});
