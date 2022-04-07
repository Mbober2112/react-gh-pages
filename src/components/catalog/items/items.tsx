import { useDispatch, useSelector } from "react-redux";
import Item from "./item";
import s from './items.module.scss';
import {dataSelector, inStockSelector} from '../../../redux/selectors';
import { useEffect } from "react";
import { allItems, onlyInStock, getDataAction } from "../../../redux/catalogReducer";

type PropsType = {
}

let Items: React.FC<PropsType> = (props) => {

    let data = useSelector(dataSelector);
    let inStock = useSelector(inStockSelector);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDataAction());
    }, []);

    const getOnlyInStock =  () => {
        dispatch(onlyInStock());
    }

    const getAllItems =  () => {
        dispatch(allItems());
    }


    if (!data) {
        return (
            <div>Loading...</div>
        )
    }
    let itemsData = [];
    if(inStock) {
        let items = data.data.products.filter((i: { quantity_available: number; }) => {return i.quantity_available > 0})
        itemsData = items.map((id: { quantity: number; initial_price: number; name: string; created_by: { display_name: string; }; quantity_available: number; }) => <Item quantity={id.quantity} price={id.initial_price} name={id.name}
            author={id.created_by.display_name} avialable={id.quantity_available} />)
    } else
    itemsData = data.data.products.map((id: { quantity: number; initial_price: number; name: string; created_by: { display_name: string; }; quantity_available: number; }) => <Item quantity={id.quantity} price={id.initial_price} name={id.name}
        author={id.created_by.display_name} avialable={id.quantity_available} />)

    return (
        <div className={s.items}>
            <div className={s.title}>
                Explore
            </div>
            <div className={s.text}>
                Buy and sell digital fashion NFT art
            </div>
            <div className={s.stockButton}>
                {inStock
                    ? <button onClick={() => { getAllItems() }}>All items</button>
                    : <button onClick={() => { getOnlyInStock() }}>Only in stock</button>}
            </div>
            <div className={s.itemsData}>
                {itemsData}
            </div>
        </div>

    )
}

export default Items;