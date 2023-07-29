import React, { useState, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import SearchItem from './SearchItem';
import useDesktopSize from '../../../hooks/useDesktopSize';
import { BooksContext } from '../../contexts/BooksContext';

export default function ISBNSearchBar() {
  const [expanded, setExpanded] = useState<boolean | null>(false);

  const desktopSize = useDesktopSize();
  const booksContext = useContext(BooksContext);  

  useEffect(() => {
    if (desktopSize) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [desktopSize]);

  if (!booksContext) {
    return <div>Loading...</div>;
  }

  const listItems = booksContext.books.map(({ isbn }) => <SearchItem isbn={isbn} key={isbn} />);

  return (
    <>
      <div className="isbn-searchbar">
        <ul className={expanded ? 'list expanded' : 'list'}>
          {listItems}
        </ul>
        {!desktopSize ?
          <button onClick={() => setExpanded(!expanded)} className="button button-expand">
            {expanded ? 'show less...' : 'show more...'}
          </button> : null
        }
      </div>
      {desktopSize &&
        <Outlet />
      }
    </>
  );
}
