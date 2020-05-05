import {CartTypesFood} from './cart-types'

export const setNumberOfQuantity = MoreFood =>({
    type  : CartTypesFood.ADD_MORE_QUANTITY ,
    payload : MoreFood

})
export const addFoodExtension = items =>({
    type: CartTypesFood.PLUS_ONE_QUANTITY ,
    payload : items
})
export const removeNumberOfQuantity = MoreFood => ({
    type : CartTypesFood.REMOVE_MORE_QUANTITY ,
    payload : MoreFood
})
export const setHiddenPage = () =>  ({
    type : CartTypesFood.TOGGLE_HIDDEN_PAGE
})