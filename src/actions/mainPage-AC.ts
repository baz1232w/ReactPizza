import {Dispatch} from "react";
import {MainePageActions, MainPageAC} from "../types/mainePage-types";
import {mainPageApi} from "../axiosRequests/api";

export const fetchItems = (sortBy:{sort: "rating" | "price" | "title", typeOfSort: "desc" | "asc"}, category: number, page: number = 1, limit: number = 4) => {
    return async (dispatch: Dispatch<MainePageActions>) => {
        try {
            dispatch({type: MainPageAC.FETCH_ITEMS})
            const items = await mainPageApi.fetchItems(`main?page=${page}&limit=${limit}&sortBy=${sortBy.sort}&order=${sortBy.typeOfSort}&category=${category}`)
            dispatch({
                type: MainPageAC.FETCH_ITEMS_SUCCESS,
                payload: items
            })
        } catch (e) {
            dispatch({
                type: MainPageAC.FETCH_ITEMS_ERROR,
                payload: 'ERROR: Can\'t resolve pizzas, please try again later'
            })
        }
    }
}

export const setTotalPage = (sortBy:{sort: "rating" | "price" | "title", typeOfSort: "desc" | "asc"}, category: number) => {
    return async (dispatch: Dispatch<MainePageActions>) =>{
        try {
            const items = await mainPageApi.fetchItems(`main?&sortBy=${sortBy.sort}&order=desc&category=${category}`)
            dispatch({type: MainPageAC.SET_TOTAL_PAGE, payload: items.length })
        } catch (e){
            dispatch({
                type: MainPageAC.FETCH_ITEMS_ERROR,
                payload: 'ERROR: Can\'t resolve , please try again later'
            })
        }

    }
}

export const searchItems =  (path:string)=> {
    return async (dispatch : Dispatch<MainePageActions>) =>{
        try {
            dispatch({type: MainPageAC.FETCH_ITEMS})
            let items;
            if(path){
                items = await mainPageApi.searchItems(path)
            }else{
                items = await mainPageApi.fetchItems(`main?page=1&limit=4`)
            }
            dispatch({type: MainPageAC.FETCH_ITEMS_SUCCESS, payload: items})
        } catch (e){
            dispatch({type: MainPageAC.FETCH_ITEMS_ERROR, payload:'Can\'t find anythings'})
        }
    }
}

export const changeCategory = (category: number) => {
    return (dispatch: Dispatch<MainePageActions>) => {
        dispatch({type: MainPageAC.CHANGE_CATEGORY, payload: category})
    }
}

export const changeSortBy = (sortBy: {sort: "rating" | "price" | "title", typeOfSort: "desc" | "asc"}) => {
    return (dispatch: Dispatch<MainePageActions>) => {
        dispatch({type: MainPageAC.CHANGE_SORT_BY, payload: sortBy})
    }
}

export const changePriceItem = (id: number) => {
    return (dispatch: Dispatch<MainePageActions>) => {
        dispatch({type: MainPageAC.CHANGE_PRICE_ITEM, payload: id})
    }
}

export const changePage = (page: number) => {
    return (dispatch: Dispatch<MainePageActions>) => {
        dispatch({type: MainPageAC.CHANGE_PAGE, payload: page})
    }
}

export const changeFilter = (id:number,filter:object) => {
    return (dispatch: Dispatch<MainePageActions>)=> {
        dispatch({type: MainPageAC.CHANGE_FILTER_TYPE, id:id, payload:filter})
    }
}



