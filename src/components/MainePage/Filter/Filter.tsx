import React, {useEffect, useState} from 'react'
import s from './filter.module.scss'
import row from '../../../assets/img/svg/switcherRow.svg'

interface props {
    category: number
    changeCategory: (category: number) => void
    changeSortBy: (sortBy: { sort: "rating" | "price" | "title", typeOfSort: "desc" | "asc" }) => void
    sortBy: { sort: "rating" | "price" | "title", typeOfSort: "desc" | "asc" }
}

export const Filter: React.FC<props> = ({changeCategory, category, changeSortBy, sortBy}) => {

    const [sort, setSort] = useState<string>('')
    const [pop, setPop] = useState<boolean>(false)

    useEffect(() => {
        switch (sortBy.sort) {
            case 'price':
                setSort('по цене')
                break;
            case 'title':
                setSort('по алфавиту')
                break;
            default:
                setSort('по популярности')
        }
    }, [sortBy])

    const popSwitcher = (sortBy: { sort: "rating" | "price" | "title", typeOfSort: "desc" | "asc" }) => {
        changeSortBy(sortBy);
        setPop(!pop)
    }

    return (
        <div className={s.filter}>
            <div>
                <ul className={s.list}>
                    <li className={category === 0 ? s.active : ''} onClick={() => changeCategory(0)}>Все</li>
                    <li className={category === 1 ? s.active : ''} onClick={() => changeCategory(1)}>Мясные</li>
                    <li className={category === 2 ? s.active : ''} onClick={() => changeCategory(2)}>Вегетарианская</li>
                    <li className={category === 3 ? s.active : ''} onClick={() => changeCategory(3)}>Гриль</li>
                    <li className={category === 4 ? s.active : ''} onClick={() => changeCategory(4)}>Острые</li>
                </ul>
            </div>
            <div className={s.switcher}>
                <p onClick={() => setPop(true)}><img src={row} alt="row"/><span>Сортировка по:</span><span
                    className={s.toggle}>
                    {sort}
                </span>
                </p>
                <div className={s.toggleSwitcher + ' ' + (pop ? s.block : '')}>
                    <ul>
                        <li className={sortBy.sort === 'rating' ? s.active : ''}
                            onClick={() => popSwitcher({sort: 'rating', typeOfSort: 'desc'})}>по популярности
                        </li>
                        <li className={sortBy.sort === 'price' && sortBy.typeOfSort === 'desc' ? s.active : ''}
                            onClick={() => popSwitcher({sort: 'price', typeOfSort: 'desc'})}>цена дороже
                        </li>
                        <li className={sortBy.sort === 'price' && sortBy.typeOfSort === 'asc' ? s.active : ''}
                            onClick={() => popSwitcher({sort: 'price', typeOfSort: 'asc'})}>цена дешевле
                        </li>
                        <li className={sortBy.sort === 'title' ? s.active : ''}
                            onClick={() => popSwitcher({sort: 'title', typeOfSort: 'asc'})}>по алфавиту
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}