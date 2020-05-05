import { createSelector } from "reselect"

const selectFood = state => state.food

export const selectFoodsShop = createSelector(
    [selectFood],
    food => food.FoodsShop
);
export const selectFoodsShopPreview = createSelector(
    [selectFoodsShop],
    FoodsShop => FoodsShop ? Object.keys(FoodsShop).map(key => FoodsShop[key]) : []
);

export const selectFoodShop = collectionUrlParam => 
    createSelector(
    [selectFoodsShop],
    FoodsShop =>(FoodsShop ? FoodsShop[collectionUrlParam] : null)
)
export const selectFoodLoading = createSelector(
    [selectFood],
    food => !!food.FoodsShop
);

export const fetchingDataForLoading = createSelector(
    [selectFood],
    food => food.isFetching
);