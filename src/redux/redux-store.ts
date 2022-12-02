import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {mainPageReducer} from "./reducers/mainPage-reducer";
import {cartReducer} from "./reducers/cart-reducer";

const rootReducer = combineReducers ({
    mainePage:mainPageReducer,
    cart:cartReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))


