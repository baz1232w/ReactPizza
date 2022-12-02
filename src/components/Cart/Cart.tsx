import React, {FC} from 'react';
import {useAction, useTypedSelector} from "../../hooks/hooks";
import {CartItem} from "./CartItems/CartItem";
import s from './cart.module.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Shop} from "../../assets/img/svg/shop.svg";
import {ReactComponent as Trash} from "../../assets/img/svg/trash.svg";
import {cleanCart, deleteItemCart, setOrder} from "../../actions/cart-AC";
import {EmptyCart} from "./EmptyCart/EmptyCart";


export const Cart: FC = () => {
    const {items, itemInCart, totalPrice} = useTypedSelector(state => state.cart)
    const {changeItemCount, deleteItemCart, cleanCart,setOrder} = useAction()

    if (items.length < 1) {
        return (
            <div className={s.cartPage}>
                <EmptyCart/>
            </div>
        )

    }

    return (
        <div className={s.cartPage}>
            <div className={s.cartHeader}>
                <div>
                    <Shop/>
                    <h2>Корзина</h2>
                </div>
                <div onClick={cleanCart} className={s.deleteAllItems}>
                    <Trash/>
                    <span>очистить корзину</span>
                </div>
            </div>
            <div className={s.items}>
                {items.map(el => {
                    return (
                        <CartItem key={el.id} item={el} changeItemCount={changeItemCount} deleteItem={deleteItemCart}/>
                    )
                })}
            </div>
            <div className={s.navigation}>
                <div className={s.totalItem}>
                    <p>Всего пицц:  {itemInCart} шт</p>
                    <p>Cумма заказа:  {totalPrice} грн</p>
                </div>
                <div className={s.btns}>
                    <Link to={'/main'}>
                        <div className={s.btn +' '+s.back}>
                            Вернуться назад
                        </div>
                    </Link>
                    <Link onClick={()=>setOrder(true)} to={'/order'}>
                        <div className={s.btn +' '+s.Order}>
                            Оплатить сейчас
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

