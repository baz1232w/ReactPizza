import React from 'react';
import {ReactComponent as Minus} from "../../../assets/img/svg/Group 35.svg";
import {ReactComponent as Plus} from "../../../assets/img/svg/Group 36.svg";
import {ReactComponent as Delete} from "../../../assets/img/svg/Group 37.svg";
import s from '../cart.module.scss'
import {Item} from "../../../types/mainePage-types";

interface props {
    item: Item
    changeItemCount: (id:number,val:'inc'| 'dec' ) => void
    deleteItem: (id:number)=> void
}

export const CartItem: React.FC<props> = ({item,changeItemCount,deleteItem}) => {


    return (
        <div className={s.cartItem}>
            <div className={s.information}>
                <img src={item.imageUrl} alt={item.title}/>
                <div className={s.title}>
                    <p>{item.title}</p>
                    <p><span>{item.filter.type === 0 ? 'традиционное' : 'тонкое'}, {item.filter.inch} cm</span></p>
                </div>
            </div>
            <div className={s.btns}>
                {item.count > 1
                    ?
                    <Minus onClick={()=> changeItemCount(item.id,'dec')} className={s.minus + ' ' +(item.count < 2 ? s.disable : '' )}/>
                    :
                    <Minus className={s.minus + ' ' + s.disable}/>

                }
                <p>{item.count}</p>
                <Plus onClick={()=>changeItemCount(item.id,'inc')} className={s.plus}/>
            </div>
            <div className={s.price}>
                <p>{item.totalPrice * item.count} грн.</p>
            </div>
            <div>
                <Delete className={s.delete} onClick={()=> deleteItem(item.id)}/>
            </div>
        </div>
    );
};

