import {createSelector} from 'reselect'

const selectQuantity = state => state.number

export const selectNumberQuantity = createSelector(
    [selectQuantity],
    number => number.FoodQuantity
)
export const SelectHidden = createSelector(
    [selectQuantity],
    number => number.hidden
)
export const selectQuantityPrice = createSelector(
    [selectNumberQuantity],
    FoodQuantity => FoodQuantity.reduce((total , item) => total + item.quantity * item.price , 0)
)
