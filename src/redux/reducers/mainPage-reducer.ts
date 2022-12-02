import {MainePageActions, MainPageAC, MainPageState} from "../../types/mainePage-types";

const initialState: MainPageState = {
    items: [],
    isLoading: false,
    error: null,
    category: 0,
    sortBy: {
        sort:'rating',
        typeOfSort: 'desc'
    },
    currentPage: 1,
    limit: 4,
    totalPage: 0
}

export const mainPageReducer = (state = initialState, action: MainePageActions): MainPageState => {
    switch (action.type) {
        case MainPageAC.FETCH_ITEMS:
            return {
                ...state,
                isLoading: true
            }
        case MainPageAC.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload.map(el => {
                    el.filter = {type:el.types[0],inch:el.sizes[0]
                    }
                    el.totalPrice = el.price

                 return el
                })
            }
        case MainPageAC.FETCH_ITEMS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case MainPageAC.CHANGE_CATEGORY:
            return {
                ...state,
                category: action.payload,
                currentPage: 1
            }
        case MainPageAC.CHANGE_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
                currentPage: 1
            }
        case MainPageAC.CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case MainPageAC.SET_TOTAL_PAGE:
            return {
                ...state,
                totalPage: Math.ceil(action.payload / state.limit)
            }
        case MainPageAC.CHANGE_PRICE_ITEM:
            return {
                ...state,
                items: state.items.map(el => {
                    if (el.id === action.payload) {
                        el.price = el.price + +(el.price * 0.10).toFixed()
                        return el
                    }
                    return el
                })
            }
        case MainPageAC.CHANGE_FILTER_TYPE:{
            const setPrice = (price:number,sizes:Array<number>,filter:{type:number,inch:number}) => {
                if(sizes[0] === filter.inch){
                    return price
                }
                if(sizes[1] === filter.inch){
                    return +(price + (price * 0.15)).toFixed()
                }
                if(sizes[2] === filter.inch){
                    return +(price + (price * 0.25)).toFixed()
                }
            }
            return{
                ...state,
                items: [...state.items].map(el => {
                    if(el.id === action.id) {
                        el.filter = {...el.filter, ...action.payload}
                        const newPrice = setPrice(el.price,el.sizes,el.filter)
                        el.totalPrice = newPrice || el.price
                    }
                    return el
                })
            }
        }
        default:
            return state
    }
}