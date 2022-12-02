import React, {FC} from 'react';
import {BtnBack} from "../../../assets/components/BtnBack";
import s from "../orderPage.module.css"

interface props {
    orderComplete: () => void
}

export const OrderComplete:FC<props> = ({orderComplete}) => {
    return (
        <div className={s.orderPage}>
            <h1>Ваш заказ успешно оформлен</h1>
            <p>Ожидайте звонка нашего менеджера</p>
            <BtnBack fn={orderComplete} str={'Вернуться на главную'}/>
        </div>
    );
};

