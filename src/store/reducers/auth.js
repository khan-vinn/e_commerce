const InitialState = {
    profiles: [
        { login: "@people", pwd: "1234", admin: false },
        { login: "@vinn", pwd: "4321", admin: true },
    ],
    logged: false,
    name: null,
};
const IS_VALID = "IS_VALID";
const ADD_ACCOUNT = "ADD_ACCOUNT";
const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";

export const AuthReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case IS_VALID:
            return state;
        case ADD_ACCOUNT:
            return state;
        case UPDATE_ACCOUNT:
            return state;
        default:
            return state;
    }
};

export function isValid(payload) {
    return { type: IS_VALID, payload };
}

export function addAccount(payload) {
    return { type: ADD_ACCOUNT, payload };
}

export function updateAccount(payload) {
    return { type: UPDATE_ACCOUNT, payload };
}
