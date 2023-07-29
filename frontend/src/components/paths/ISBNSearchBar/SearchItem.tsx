import type { ISBN } from "../../../helper/isbnIsValid";
import { Link } from "react-router-dom";
import formatIsbnString from "../../../helper/formatIsbnString";
import { useLocation } from "react-router-dom";


export default function SearchItem({ isbn }: { isbn: ISBN }) {
    if (typeof isbn === 'number') {
        isbn = isbn.toString()
    }
    const location = useLocation()
    const formattedISBN = formatIsbnString(isbn)
    const selected = location.pathname.includes(isbn);

    return (
        <div className="search-item">
            <li className="list-item">
                <Link className={selected ? "link selected" : "link"} to={`/isbn-search/${isbn}`}>
                    <span className="isbn">
                        {formattedISBN}
                    </span>
                    <span className="arrow">{'>'}</span>
                </Link>
            </li >
        </div >
    )
}