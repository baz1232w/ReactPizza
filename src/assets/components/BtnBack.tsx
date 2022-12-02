import React, {FC} from 'react';
import s from "../../components/Cart/cart.module.scss";
import {Link} from "react-router-dom";

interface props {
    str: string
    fn?: () => void
}

export const BtnBack:FC<props> = ({str,fn}) => {
    return (
        <div onClick={fn}>
            <Link to={'/main'}>
                <div className={s.btnAdd}>
                    {str}
                </div>
            </Link>
        </div>
    )
};

