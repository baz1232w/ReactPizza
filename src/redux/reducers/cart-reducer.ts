import {CartAC, CartActions, CartState} from "../../types/cart-types";
import {getCartItems} from "../../utilits/getCartItems";

const initialState: CartState = {
    items: getCartItems(),
    isLoading: false,
    error: null,
    itemInCart: 0,
    totalPrice: 0,
    isOrder: false
}

export const cartReducer = (state = initialState, action: CartActions): CartState => {
    switch (action.type) {
        case CartAC.FETCH_CART_ITEMS:
            return {
                ...state,
                isLoading: true
            }
        case CartAC.FETCH_CART_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }
        case CartAC.FETCH_CART_ITEMS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CartAC.ADD_TO_CART:
            const newArr = [...state.items]
            const newItem = action.payload
            if(newArr.some(el => el.id === newItem.id)){
                for(let el of newArr){
                    if(el.id === newItem.id){
                        el.count++
                    }
                }
            }else {
                newItem.count++
                newArr.push(newItem)
            }

            return {
                ...state,
                items: newArr,
                itemInCart: newArr.length
            }
        case CartAC.SET_TOTAL_ITEM:
            return {
                ...state,
                itemInCart: state.items.reduce((sum, el) => sum += el.count, 0),
                totalPrice: state.items.reduce((sum, el) => sum += el.count * el.totalPrice, 0)

            }

        case CartAC.CHANGE_ITEM_COUNT:
            return {
                ...state,
                items: [...state.items].map(el => {
                    if (el.id === action.payload) {
                        if (action.val === 'inc') {
                            el.count += 1
                        } else {
                            el.count -= 1
                        }
                        return el
                    } else {
                        return el
                    }
                })
            }
        case CartAC.DELETE_ITEM_CART:
            return {
                ...state,
                items: [...state.items].filter(el => el.id !== action.payload && el.totalPrice)
            }

        case CartAC.CLEAN_CART:
            return {
                ...state,
                items: []
            }
        case CartAC.SET_ORDER:
            return {
                ...state,
                isOrder: action.payload
            }
        default:
            return state
    }
}

