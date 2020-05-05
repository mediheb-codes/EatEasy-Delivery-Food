const addItemToState = (FoodItem , FoodItemToAdd) => {
        return FoodItem.map(Food => (
            Food.id === FoodItemToAdd.id
            ?{...Food , quantity : Food.quantity + 1}
            : Food )
        )
}
export default addItemToState

export const removeItemToState = (FoodItem , FoodItemToAdd) => {
    return FoodItem.map(Food => (
        Food.id === FoodItemToAdd.id
        ?{...Food , quantity : (Food.quantity === 0 ) ? Food.quantity :  Food.quantity - 1}
        : Food )
    )
}