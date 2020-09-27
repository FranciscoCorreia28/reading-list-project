import React, { useEffect } from 'react';
import Loader from './loader/Loader.jsx';
import MainHeader from './header/MainHeader';


/********IMPORTANDO OS ESTILOS***********/
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/elegant-icons.css';
import '../assets/css/nice-select.css';
/***************************************/

export default function () {
    const useEffect = () => {
        setTimeout(() => {
            return <div> <Loader /></div>
        }, 2000);
        return () => {
            const valor = { display: "none" };
            return <div> <Loader valor={valor} /></div>
        }
    }
    return (
        <div>
            <MainHeader />
        </div>
    );
}
