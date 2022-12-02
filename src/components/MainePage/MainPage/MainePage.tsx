import React, {ReactElement} from "react";
import {Item} from "../../../types/mainePage-types";
import '../../../assets/img/svg/svg.css'
import s from './MainePage.module.scss'
import {PizzaItem} from "../Item/Item"
import {SceletonItem} from "../../../assets/components/Sceleton/SceletonItem";
import {findAllByDisplayValue} from "@testing-library/react";

interface props {
    items: Item[] | []
    isLoading: boolean
    changePriceItem: (id:number) => void
    changePage:(page:number) => void
    addToCart: (item:Item) => object
}

export const MainePage:React.FC<props> = ({items,isLoading,addToCart}) =>{

    if(isLoading){
        return(
            <div className={s.items}>
                {
                  new Array(1,2,3,4).map(el=>{
                      return <SceletonItem key={el}/>
                  })
                }
            </div>
        )
    }

    return <div className={s.items}>
        {
            items.map((el:Item) => {
            return <PizzaItem key={el.id} item={el} addToCart={addToCart}/>
                })
        }
    </div>
}


