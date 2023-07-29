import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BooksContext } from '../../contexts/BooksContext';
import isbnIsValid from "../../../helper/isbnIsValid";
import formatIsbnString from "../../../helper/formatIsbnString";
import numberToRomanNumeral from "../../../helper/numberToRomanNumeral";
import useDesktopSize from "../../../hooks/useDesktopSize";

export default function ISBNSlugItem() {
    const desktopSize = useDesktopSize()
    const params = useParams()
    const context = useContext(BooksContext);

    if (!context) {
        return <div>Loading...</div>;
    }
    
    const { books } = context;
    
    const currentBook = books.find((book) => book.isbn === params!.isbn)

    const validISBN = isbnIsValid(params!.isbn as string);
    const imgSrc = validISBN ? `/images/${params!.isbn as string}.jpg` : '/images/default.jpg'

    const infoTitle = validISBN ? currentBook!.title : 'No title'
    const infoISBN = validISBN ? formatIsbnString(params!.isbn as string) : 'Invalid'
    const infoAppendix = validISBN ? numberToRomanNumeral(Number(currentBook!.appendixPage)) : 'Invalid'

    return (
        <section className="section book-section slug-item">
            {!desktopSize &&
                <div className="link">
                    <Link to="/isbn-search" className="back">
                        <span className="arrow-back">{'<'}</span>
                        <span className="text">{' '}back...</span>
                    </Link>
                </div>
            }
            <article className="book">
                <div className="cover">
                    <img className="img" src={imgSrc} alt={`book cover ISBN: ${params.isbn}`} />
                </div>
                <div className="info">
                    <h2 className="title">{infoTitle}</h2>
                    <span className="isbn">ISBN: {infoISBN}</span>
                    <span className="appendix">Appendix: {infoAppendix!.toLocaleLowerCase()}</span>
                </div>
            </article>
        </section>
    )
}
