import React, {FC} from 'react';
import s from '../../components/Cart/cart.module.scss'
import {BtnBack} from "../../assets/components/BtnBack";
import errorImage from '../../assets/img/errorPage.jpg'

export const ErrorPage:FC = () => {
    return (
        <div className={s.emptyCart}>
            <h1>Страница не найдена</h1>
            <img src={errorImage} alt="Empty Logo"/>
            <BtnBack str={'Главная страница'}/>
        </div>
    );
};


