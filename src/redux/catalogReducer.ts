
const GET_DATA = 'catalog/GET-DATA';
const ONLY_IN_STOCK = 'catalog/ONLY-IN-STOCK';
const ALL_ITEMS = 'catalog/ALL-ITEMS';
export const GET_DATA_ACTION = 'catalog/GET-DATA-ACTION';

export type DataType = {
    author: string,
    name: string,
    avialable: number,
    quantity: number,
    price: number,
}

let initialState = {
    data: null as null | any,
    inStock: false as boolean,
}

export type InitialStateType = typeof initialState

const catalogReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.data
            }
        case ONLY_IN_STOCK:
            return {
                ...state,
                inStock: true,
            }
        case ALL_ITEMS:
            return {
                ...state,
                inStock: false,
            }
        default:
            return state;
    }
}

type GetDataActionType = {
    type: typeof GET_DATA,
    data: any,
}
type OnlyInStockActionType = {
    type: typeof ONLY_IN_STOCK,
}
type AllItemsActionType = {
    type: typeof ALL_ITEMS,
}
type ActionTypes = GetDataActionType | OnlyInStockActionType | AllItemsActionType;


export const getData = (data: any): GetDataActionType => ({ type: GET_DATA, data: data });

export const getData2 = (data: any) => ({ type: GET_DATA, autor: data.data. });

export const onlyInStock = (): OnlyInStockActionType => ({ type: ONLY_IN_STOCK });
export const allItems = (): AllItemsActionType => ({ type: ALL_ITEMS });

export const getDataAction = () => ({type: GET_DATA_ACTION});

export default catalogReducer;