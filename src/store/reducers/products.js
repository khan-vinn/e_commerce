const initialState = [
    { id: 1, title: "iPhone 13", price: 545.0, amount: 10 },
    { id: 2, title: "iPhone X", price: 400.0, amount: 5 },
    { id: 3, title: "MacBook M2", price: 1200.0, amount: 4 },
    { id: 4, title: "iWatch 4", price: 340.0, amount: 20 },
    { id: 5, title: "iPhone SE", price: 800.0, amount: 15 },
];

let LastID = 6;
const idIncr = () => LastID++;

const ADD_PRODUCT = "ADD_PRODUCT";

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: idIncr(),
                    title: action.payload.title,
                    price: action.payload.price,
                    amount: action.payload.amount,
                },
            ];
        default:
            return state;
    }
};

export const addProduct = (payload)=> ({type: ADD_PRODUCT, payload})

export default ProductReducer;
