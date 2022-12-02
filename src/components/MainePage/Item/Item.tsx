import React, {FC, useEffect} from 'react';
import s from "../MainPage/MainePage.module.scss";
import {ReactComponent as Plus} from "../../../assets/img/svg/plus.svg";
import {Item} from "../../../types/mainePage-types";
import {useAction, useTypedSelector} from "../../../hooks/hooks";
import {Link} from "react-router-dom";

interface props {
    item: Item
    addToCart: (item: Item) => void
}

export const PizzaItem: FC<props> = ({item, addToCart}) => {
    const {changeFilter} = useAction()
    const {items} = useTypedSelector(state => state.cart)
    const [count, setCount] = React.useState<number>(0)

    useEffect(() => {
        const obj = items.find(el => el.id === item.id)
        if (obj) {
            setCount(obj.count)
        }

    }, [])





    return (
        <div className={s.item}>
            <Link to={`${item.id}`}>
                <div>
                    <img src={item.imageUrl} alt={item.title}/>
                    <h3 className={s.title}>{item.title}</h3>
                </div>
            </Link>
            <div className={s.constructor}>
                <ul className={s.list}>
                    {item.types.map(el => {
                            return (
                                <div key={el}>
                                    {el === 0
                                        ?
                                        <li className={s.type + " " +(item.filter.type === 0 ? s.active : null)} onClick={()=>changeFilter(item.id,{type:0})}>традиционное</li>
                                        :
                                        <li className={s.type + " " +(item.filter.type === 1? s.active : null)} onClick={()=>changeFilter(item.id,{type:1})}>тонкое</li>
                                    }
                                </div>
                            )
                        }
                    )}
                </ul>
                <ul className={s.list}>
                    {item.sizes.map(el => {
                        return <li key={el}  onClick={()=>changeFilter(item.id,{inch:el})} className={s.cm + ' ' + (item.filter.inch === el ? s.active : '')  }>{el}см.</li>
                    })}
                </ul>
            </div>
            <div className={s.priceWrapper}>
                <div className={s.price}>{item.totalPrice}₴</div>
                <div onClick={() => {
                    addToCart(item);
                    setCount(count + 1)
                }}
                     className={!count ? s.addBtn : s.addBtn + ' ' + s.active}>
                    <div>
                        <Plus width='12px' className={s.plus}/>
                        Добавить
                    </div>
                    <div>
                        {count
                            ?
                            <span className={s.count}>
                                    {count}
                                </span>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

