import {UserTypes} from './user.types'

export const setCurrentUser = user => ({
    type : UserTypes.SET_CURRENT_TIME,
    payload : user 
});
export const setHiddenPage = () =>  ({
    type : UserTypes.TOGGLE_HIDDEN_PAGE
})