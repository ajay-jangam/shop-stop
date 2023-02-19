import { combineReducers } from "redux"
import { productDetailReducer, productReducer } from "./productReducer"

const reducers = combineReducers({
	allProducts: productReducer,
	product: productDetailReducer,
})

export default reducers
