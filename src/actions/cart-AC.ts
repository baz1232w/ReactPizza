import {CartAC, CartActions} from "../types/cart-types";
import {Item} from "../types/mainePage-types";

export const addToCart = (item:Item):CartActions => ({type: CartAC.ADD_TO_CART, payload: item,})
export const setTotalItems = ():CartActions => ({type: CartAC.SET_TOTAL_ITEM})
export const changeItemCount = (id:number,val:'inc' | 'dec'):CartActions => ({type: CartAC.CHANGE_ITEM_COUNT, payload: id, val:val})
export const deleteItemCart = (id:number):CartActions => ({type: CartAC.DELETE_ITEM_CART, payload: id})
export const cleanCart = ():CartActions => ({type: CartAC.CLEAN_CART})
export const setOrder = (isOrder: boolean) => ({type: CartAC.SET_ORDER, payload:isOrder})