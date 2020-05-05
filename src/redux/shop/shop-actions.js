import { ShopTypesData } from "./shop-types";
import { createFoodDocument, firestore } from "../../firebase/firebase";


const fetchingDataIsStart = () => ({
    type : ShopTypesData.FETCHING_START_ASYNC_START 
})
const addDataShopFromFirebase = data => ({
    type : ShopTypesData.FETSHING_START_ASYNC_SUCCESS ,
    payload : data
})
const fetchingDataIsFailure = errorMessage => ({
    type : ShopTypesData.FETSHING_START_ASYNC_FAILURE,
    payload : errorMessage
})

export const fetchDataStartAsync = () => {
    return dispatch => {
        const foodCollection = firestore.collection('collections') ;
        dispatch(fetchingDataIsStart())
        foodCollection.get().then(async snapShot => {
            const FoodsMap = createFoodDocument(snapShot)
            dispatch(addDataShopFromFirebase(FoodsMap))
        }).catch(error => 
            dispatch(fetchingDataIsFailure(error.message))
            )
    }
}
