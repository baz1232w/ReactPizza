export interface MainPageState {
    items: Item[]
    isLoading: boolean
    error: null | string
    category: number
    sortBy: {
        sort: 'rating' | 'price' | 'title',
        typeOfSort: 'asc' | 'desc'
    }
    currentPage: number
    limit: number
    totalPage: number
}

export type Item = {
    "id": number
    "imageUrl": string
    "title": string
    "types": Array<number>
    "sizes": Array<number>
    "price": number
    "totalPrice": number
    "category": number[]
    "rating": number
    "count": number
    "discription": string
    "filter": { type: number, inch: number }
}

export enum MainPageAC {
    FETCH_ITEMS = 'mainPage/FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS = 'mainPage/FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR = 'mainPage/FETCH_ITEMS_ERROR',
    CHANGE_CATEGORY = 'mainePage/CHANGE_CATEGORY',
    CHANGE_SORT_BY = 'mainPage/CHANGE_SORT_BY',
    CHANGE_PRICE_ITEM = 'mainPage/CHANGE_PRICE_ITEM',
    CHANGE_PAGE = 'mainPage/CHANGE_PAGE',
    SET_TOTAL_PAGE = 'mainPage/SET_TOTAL_PAGE',
    CHANGE_FILTER_TYPE = 'mainPage/CHANGE_FILTER_TYPE'
}

interface FetchItems {
    type: MainPageAC.FETCH_ITEMS
}

interface FetchItemsSuccess {
    type: MainPageAC.FETCH_ITEMS_SUCCESS
    payload: any[]
}

interface FetchItemsError {
    type: MainPageAC.FETCH_ITEMS_ERROR
    payload: string
}

interface ChangeCategory {
    type: MainPageAC.CHANGE_CATEGORY
    payload: number
}

interface ChangeSortBy {
    type: MainPageAC.CHANGE_SORT_BY
    payload: {
        sort: "rating" | "price" | "title",
        typeOfSort: 'asc' | 'desc'
    }
}

interface ChangePriceItem {
    type: MainPageAC.CHANGE_PRICE_ITEM
    payload: number
}

interface ChangePage {
    type: MainPageAC.CHANGE_PAGE
    payload: number
}

interface SetTotalPage {
    type: MainPageAC.SET_TOTAL_PAGE
    payload: number
}

interface ChangeFilterType {
    type: MainPageAC.CHANGE_FILTER_TYPE
    id: number
    payload: object
}

export type MainePageActions =
    FetchItems
    | FetchItemsSuccess
    | FetchItemsError
    | ChangeCategory
    | ChangeSortBy
    | ChangePriceItem
    | ChangePage
    | SetTotalPage
    | ChangeFilterType

