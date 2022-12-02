import React, {FC} from 'react';
import {ReactComponent as Spinner} from '../../img/svg/Spinner.svg'


export const Preloader:FC = () => {
    return (
        <div style={{height:'100vh' , marginTop:'10%'}}>
            <Spinner/>
        </div>
    );
};

