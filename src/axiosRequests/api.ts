import axios from "axios";
import {Item} from "../types/mainePage-types";

const request = axios.create({
    baseURL: 'https://63789c060992902a251e6581.mockapi.io/'
})


type FetchItems = {
    data: Item[]
}

export const mainPageApi = {
    fetchItems: async (path: string) => {
        const response: FetchItems = await request.get(`/${path}`)
        return response.data
    },

    fetchSearchItem: async (param:string) =>{
        const response: FetchItems = await request.get(`/main?search&id=${param}`)
        return response.data
    },

    searchItems: async (path: string) => {
        const response: FetchItems = await request.get(`/main?page=1&limit=4&search&title=${path}`)
        return response.data
    }
}
