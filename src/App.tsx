import React from 'react';
import './App.scss';
import {MainPageContainer} from "./components/MainePage/MainPageContainer";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/Cart/Cart";
import AboutPage from "./components/AboutPage/AboutPage";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";
import {OrderPage} from "./components/OrderPage/OrderPage";

function App() {


  return (
    <div className={'container'} >
        <Header/>
        <Routes>
            <Route path={'/'} element={<MainPageContainer/>}/>
            <Route path={'/main'} element={<MainPageContainer/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'/main/:id'} element={<AboutPage/>}/>
            <Route path={'/order'} element={<OrderPage/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
