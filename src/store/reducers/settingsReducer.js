//3. adım reducer'da action constant ile state değişimi yap
import { LOGOUT_USER, SET_USER } from "../actions/settingsActions";

const initialState = {
    user: {
        email: ""
    },
    title: "Counter Page"
}

export function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: initialState.user
            }
        default:
            return state;
    }
}