import { ShopTypesData } from "./shop-types";


const Initial_State = {
    FoodsShop: null ,
    isFetching : false ,
    errorMessage : undefined
}

const shopReducer = (state = Initial_State , action) => {
    switch(action.type){
        case ShopTypesData.FETCHING_START_ASYNC_START :
            return {
                ...state ,
                isFetching : true
            }
        case ShopTypesData.FETSHING_START_ASYNC_SUCCESS : 
            return {
                ...state ,
                isFetching : false ,
                FoodsShop : action.payload
            }
        case ShopTypesData.FETSHING_START_ASYNC_FAILURE : 
            return {
                ...state ,
                isFetching : false ,
                errorMessage : action.payload
            }
        default :
        return state
    }
}
export default shopReducer ;