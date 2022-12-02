import React, {useEffect} from 'react'
import s from './header.module.scss'
import logo from '../../assets/img/logo.png'
import {useAction, useTypedSelector} from "../../hooks/hooks";
import {Link, useLocation} from "react-router-dom";
import {ReactComponent as Cart} from '../../assets/img/svg/cart.svg'
import {Search} from "./Search/Search";

export const Header: React.FC = () => {
    const {itemInCart, items, totalPrice} = useTypedSelector(state => state.cart)
    const {setTotalItems, searchItems} = useAction()

    const {pathname} = useLocation()

    useEffect(() => {
        setTotalItems()
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    return (
        <header className={s.header}>
            <Link to={'/main'}>
                <div className={s.mainLogo}>
                    <div className={s.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={s.title}>
                        <h1>REACT PIZZA</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
            {(pathname !== '/cart' && pathname !== '/order') &&
                <div className={s.searchArea}>
                    <Search searchItems={searchItems}/>
                    <Link to={'/cart'}>
                        <div className={s.cartButton}>
                            <span className={s.totalPrice}>{totalPrice} ₴</span>
                            <Cart/><span className={s.cart}> {itemInCart ? itemInCart : ''}</span>
                        </div>
                    </Link>
                </div>
            }
        </header>
    )
}