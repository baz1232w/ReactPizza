import React, {useCallback, useState} from 'react';
import debounce from 'lodash.debounce'
import s from '../header.module.scss'
import {ReactComponent as Delete} from "../../../assets/img/svg/Group 37.svg";

interface props {
    searchItems: (path:string) => void
}

export const Search:React.FC<props> = ({searchItems}) => {
    const [input,setInput] = useState<string>('')
    const searchDebounce = useCallback(
        debounce((str)=>{
            searchItems(str);
        },500),[]
    )

    const handleInput = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setInput(e.target.value)
        searchDebounce(e.target.value)
    }

    const clearKeyInput = (e:React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Backspace'){
            if(input.length === 1){
                searchDebounce('')
            }
        }
    }

    const clearClickInput = (e:React.MouseEvent<HTMLSpanElement>) =>{
        setInput('')
        searchDebounce('')
    }

    return (
        <div className={s.search}>
            <input type="text" value={input} onChange={handleInput} onKeyDown={clearKeyInput} placeholder="Найди свою пиццу:)"/>
            <Delete className={s.delete + ' ' + (input ? s.active : '' )} onClick={clearClickInput}/>
        </div>
    );
};

