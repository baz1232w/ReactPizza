import React, {useEffect} from 'react'
import {useAction, useTypedSelector} from "../../hooks/hooks";
import {Filter} from "./Filter/Filter";
import s from './MainPage/MainePage.module.scss'
import {MainePage} from "./MainPage/MainePage";



export const MainPageContainer: React.FC = () => {
    const {items,isLoading,error,category,sortBy,totalPage,currentPage,limit} = useTypedSelector(state => state.mainePage)
    const {fetchItems,changeCategory,changeSortBy,changePriceItem,changePage,setTotalPage,addToCart} = useAction()

    useEffect(()=>{
        setTotalPage(sortBy,category)
        fetchItems(sortBy,category,currentPage,limit)
    },[category,sortBy,currentPage])

    if(error){
        return <div className={s.heightNormalized}>{error}</div>
    }

    const createPagination = () =>{
        const newArr = []
        for(let i = 1; i <= new Array(totalPage).length; i++){
            newArr.push(i)
        }
        return newArr
    }


    const scrollUp = (el:number) => {
        changePage(el)
        const val = (window.innerHeight);
        window.scrollTo(
            {
                top: val,
                behavior:'smooth'
            }
        )
    }

    return (
        <div className={s.container}>
            <Filter sortBy={sortBy} category={category} changeCategory={changeCategory} changeSortBy={changeSortBy}/>
            <h2 className={s.mainTitle}>Все пиццы</h2>
            {items.length < 1
                ?
                <div style={{height:'100vh'}}>Нечего не найденно</div>
                :
                <MainePage items={items} isLoading={isLoading} changePriceItem={changePriceItem} changePage={changePage} addToCart={addToCart}/>
            }
            {items.length < 1 ||
                <div className={s.pagination}>
                {createPagination().map((el)=>{
                    return(
                        <p  key={el} className={currentPage === el ? s.active : ''} onClick={()=>scrollUp(el)}>{el}</p>
                    )
                })}
            </div>
            }

        </div>
    )
}