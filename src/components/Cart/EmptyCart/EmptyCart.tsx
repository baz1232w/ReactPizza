import React, {FC} from 'react';
import emptyImage from '../../../assets/img/svg/emptyCart.png'
import s from '../cart.module.scss'
import {BtnBack} from "../../../assets/components/BtnBack";

export const EmptyCart: FC = () => {
    return (
        <div className={s.emptyCart}>
            <h1>Корзина пустая </h1>
            <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
            <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={emptyImage} alt="Empty Logo"/>
            <BtnBack str={'Вернуться назад'}/>
        </div>
    );
};


