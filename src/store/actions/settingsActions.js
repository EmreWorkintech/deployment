//1. adım action constant oluştur
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";

//2. adım action creator function oluştur
export function logoutUser(){
    return {
        type: LOGOUT_USER
    }
}

export function setUser(user){
    return {
        type: SET_USER,
        payload: user
    }
}