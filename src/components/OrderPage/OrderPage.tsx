import React, {useEffect, useState} from 'react';
import {useAction, useTypedSelector} from "../../hooks/hooks";
import s from './orderPage.module.css'
import {OrderComplete} from "./OrderComplete/OrderComplete";
import {BtnBack} from "../../assets/components/BtnBack";
import {ErrorPage} from "../ErrorPage/ErrorPage";


export const OrderPage: React.FC = () => {
    const {totalPrice, isOrder} = useTypedSelector(state => state.cart)
    const {cleanCart} = useAction()

    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [tel, setTel] = useState<string>('+380')
    const [nameDirty, setNameDirty] = useState<boolean>(false)
    const [telDirty, setTelDirty] = useState<boolean>(false)
    const [nameError, setNameError] = useState<string>('Имя не может быть пустым')
    const [telError, setTelError] = useState<string>('Телефон не может быть пустым')
    const [isOrderComplete, setIsOrderComplete] = useState<boolean>(false)
    const [isFormValid, setIsFormValid] = useState<boolean>(false)

    useEffect(() => {
        if (nameError || telError) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }, [nameError, telError])

    const telHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value)
        const re = new RegExp(/^\+380\d{3}\d{2}\d{2}\d{2}$/)
        if (!re.test(String(e.target.value))) {
            setTelError('Не верно введен номер телевона')
        } else {
            setTelError('')
        }
    }

    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        if (e.target.value.length < 2) {
            setNameError('Имя должно состоять из не меньше 2 букв')
        } else {
            setNameError('')
        }
    }


    const blurHandler = (e: React.FocusEvent<HTMLInputElement>): void => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break;
            case 'tel':
                setTelDirty(true)
                break;
        }
    }

    const getOrder = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName('')
        setAddress('')
        setTel('')

        cleanCart()
        setIsOrderComplete(true)
    }

    const closeOrder = () => {
        setIsOrderComplete(false)
    }

    if (!isOrder) {
        return <ErrorPage/>
    }

    if (isOrderComplete) {
        return <OrderComplete orderComplete={closeOrder}/>
    }

    return (
        <div className={s.orderPage}>
            <div><h2>Оформление заказа </h2>{isFormValid ? <span style={{color: 'red'}}>Введите все поля</span> : null}
            </div>
            <form>

                <label>Ваше имя:
                    {(nameDirty && nameError) && <span style={{color: 'red'}}>{nameError}</span>}
                    <input onBlur={blurHandler} type={'text'} value={name} onChange={nameHandler} name={'name'}
                           placeholder={'Ваше имя'}/></label>
                <label>Адресс доставки: <input type={'text'} value={address}
                                               onChange={(e) => setAddress(e.target.value)} name={'address'}
                                               placeholder={'Адрес'}/>
                    {(telDirty && telError) && <span style={{color: 'red'}}>{telError}</span>}
                </label>

                <label>Телефон: <input onBlur={blurHandler} type={'tel'} value={tel} onChange={telHandler}
                                       name={'tel'}/></label>
                <p className={s.total}>Ваш заказ на сумму <span className={s.totalPrice}>{totalPrice} грн.</span></p>
                <input disabled={isFormValid} className={s.btnOrder + ' ' + (isFormValid ? s.isFormValid : null)}
                       onClick={getOrder} type="submit" value={'Оформить заказ'}/>
            </form>
            <BtnBack str={'Вернуться назад'}/>
        </div>
    );
};

