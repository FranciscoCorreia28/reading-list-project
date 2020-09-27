import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BookContextProvider from './context/BookContext';
import '../assets/css/style.css'


export default function () {

    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
            </BookContextProvider>
        </div>
    );
}
