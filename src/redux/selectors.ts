import { AppStateType } from "./reduxStore";

export const dataSelector = (state: AppStateType) =>{
    return state.catalogState.data;
}

export const inStockSelector = (state: AppStateType) =>{
    return state.catalogState.inStock;
}