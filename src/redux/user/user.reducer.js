import { UserTypes } from "./user.types"


const Initial_State = {
    currentUser : null,
    hidden : false
}

const userReducer = (state = Initial_State , action) => {
    switch(action.type){
        case UserTypes.SET_CURRENT_TIME:
            return {
                ...state ,
                currentUser : action.payload
            };
        case UserTypes.TOGGLE_HIDDEN_PAGE : 
            return {
                ...state ,
                hidden : !state.hidden
            }
            default : 
                return state ;
    }
}
export default userReducer ;