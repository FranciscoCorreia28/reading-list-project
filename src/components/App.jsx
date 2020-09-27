import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BookContextProvider from './context/BookContext';
import BookList from './BookList';
import '../assets/css/style.css';


export default function () {

    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
                <BookList />
            </BookContextProvider>
        </div>
    );
}
