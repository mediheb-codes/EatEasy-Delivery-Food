import { CartTypesFood } from "./cart-types"
import addItemToState, { removeItemToState } from "./cart-utils";
const Initial_State = {
    FoodQuantity : [],
    hidden : false
}

const QuantityReducer = (state = Initial_State , action) => {
    switch(action.type){
        case CartTypesFood.PLUS_ONE_QUANTITY : 
            return{
                ...state ,
                FoodQuantity : action.payload
            }
        case CartTypesFood.ADD_MORE_QUANTITY : 
            return{
                ...state ,
                FoodQuantity : addItemToState(state.FoodQuantity , action.payload)
            }
        case CartTypesFood.REMOVE_MORE_QUANTITY :
            return{
                ...state ,
                FoodQuantity : removeItemToState(state.FoodQuantity , action.payload),
            }
        case CartTypesFood.TOGGLE_HIDDEN_PAGE : 
            return {
                ...state ,
                hidden : !state.hidden
            }
        default : 
            return state ;
    }
}
export default QuantityReducer ;