import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Book {
  isbn: string;
  title: string;
  appendixPage: number;
}

interface IContextProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BooksContext = createContext<IContextProps | undefined>(undefined);

interface BooksProviderProps {
  children: ReactNode;
}

export const BooksProvider: React.FC<BooksProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);  

  useEffect(() => {
    fetch("http://localhost:9000/")
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(data => {
        setBooks(data);
      })
      .catch(function() {
        console.log("Fetch failed, check your server or network connection");
      });
  }, []);
  

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
