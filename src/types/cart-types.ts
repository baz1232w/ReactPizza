import {Item} from "./mainePage-types";

export interface CartState {
    items: Item[]
    isLoading: boolean
    error: null | string
    itemInCart: number
    totalPrice: number
    isOrder: boolean
}

export enum CartAC {
    FETCH_CART_ITEMS = 'cart/FETCH_CART_ITEMS',
    FETCH_CART_ITEMS_SUCCESS = 'cart/FETCH_CART_ITEMS_SUCCESS',
    FETCH_CART_ITEMS_ERROR = 'cart/FETCH_CART_ITEMS_ERROR',
    ADD_TO_CART = 'cart/ADD_TO_CART',
    SET_TOTAL_ITEM = 'cart/SET_TOTAL_ITEM',
    CHANGE_ITEM_COUNT = 'cart/CHANGE_ITEM_COUNT',
    DELETE_ITEM_CART = 'cart/DELETE_ITEM_CART',
    CLEAN_CART = 'cart/CLEAN_CART',
    SET_ORDER = 'cart/SET_ORDER',
}

interface FetchCartItems {
    type: CartAC.FETCH_CART_ITEMS
}

interface FetchCartItemsSuccess {
    type: CartAC.FETCH_CART_ITEMS_SUCCESS
    payload: any[]
}

interface FetchCartItemsError {
    type: CartAC.FETCH_CART_ITEMS_ERROR
    payload: string
}

interface AddToCart {
    type: CartAC.ADD_TO_CART
    payload: Item
}

interface SetTotalItem {
    type: CartAC.SET_TOTAL_ITEM
}

interface ChangeItemCount {
    type: CartAC.CHANGE_ITEM_COUNT
    payload: number
    val: 'dec' | 'inc'
}

interface DeleteItemCart {
    type: CartAC.DELETE_ITEM_CART
    payload: number
}

interface CleanCart {
    type: CartAC.CLEAN_CART
}

interface SetOrder {
    type: CartAC.SET_ORDER
    payload: boolean
}

export type CartActions =
    FetchCartItems
    | FetchCartItemsSuccess
    | FetchCartItemsError
    | AddToCart
    | SetTotalItem
    | ChangeItemCount
    | DeleteItemCart
    | CleanCart
    | SetOrder


