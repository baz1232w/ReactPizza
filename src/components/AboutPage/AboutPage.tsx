import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {mainPageApi} from "../../axiosRequests/api";
import {Item} from '../../types/mainePage-types'
import s from './aboutPage.module.scss'
import {BtnBack} from "../../assets/components/BtnBack";
import {Preloader} from "../../assets/components/Preloader/Preloader";

export const AboutPage: React.FC = () => {
    const [item, setItem] = useState<Item>()
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            mainPageApi.fetchSearchItem(id).then(data => setItem(data[0]))
        }
    }, [])

    if(item){
        return (
            <div className={s.aboutPage}>
                <img src={item.imageUrl} alt={item.title}/>
                <div className={s.discription}>
                    <h2>{item.title}</h2>
                    <p>Цена: {item.price} грн</p>
                    <p>Состав: {item.discription}</p>
                    <BtnBack str={'Вернуться назад'}/>
                </div>

            </div>
        );
    }

    return(
        <div>
            <Preloader/>
        </div>
    )

};

export default AboutPage;