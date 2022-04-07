import s from './item.module.scss';

type PropsType = {
    author: string,
    name: string,
    avialable: number,
    quantity: number,
    price: number,
}
let Item: React.FC<PropsType> = (props) => {
    return (

        <div className={s.item}>
            <div className={s.title}>
                <p className={s.created}>created by</p>
                <p className={s.author}>{props.author}</p>
                <p className={s.name}>{props.name}</p>
            </div>
            <div className={s.info}>
                
                <div className={s.avialable}>
                    <p>avialable</p>
                    <p className={s.number}>{props.avialable} of {props.quantity}</p>
                </div>
                <div className={s.price}>
                    <p>price</p>
                    <p className={s.cost}>{props.price} ETH</p>
                </div>
            </div>
        </div>
    )
}

export default Item;