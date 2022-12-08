import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import { useLocation } from "react-router-dom"
import { getSearchBooksData, getSearchQuotessData } from '../global/data/booksData'

import '../styles/Results.css';
import Book from '../components/Book/Book'
import Footer from '../components/Footer/Footer'

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Results = () => {
    let query = useQuery();

    const search = query.get("search") ?? "";
    const type = query.get("type") ?? "";

    const books = type === "books" ? getSearchBooksData() : getSearchQuotessData();
    
  return (
    <>
      <div className='mainHeader'>
        <Header />
        <div className='mt-5 mb-3'>
            <SearchBar search={search} searchType={type} />
        </div>
        <div className='title-header d-flex justify-content-center mb-2 mt-2'>
            <p className='font-kaushan text-center'>Results</p>
        </div>
      </div>
      <div>
        {
            books.map((book) => {
                return (
                    <Book 
                        image={book.image}
                        title={book.title}
                        author={book.author}
                        library_name={book.library_name}
                        library_phone={book.library_phone}
                        library_adress={book.library_adress}
                        price={book.price}
                        quantity={book.quantity}
                        lang={book.lang}
                    />
                )
            })
        }
      </div>
      <Footer />
    </>
  )
}

export default Results
