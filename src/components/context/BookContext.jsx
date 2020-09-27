import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid'
export const BookContext = createContext()
export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        { title: 'O Milagre da Manhã', author: 'desconhecido', id: 1 },
        { title: 'Seja a tua melhor versão', author: 'desconhecido', id: 2 }
    ])

    const addBook = (title, author) => { setBooks([...books, { title, author, id: uuid() }]) }
    const removeBook = (id) => { setBooks(books.filter(book => book.id !== id)) }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
};
