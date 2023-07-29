import { Link } from "react-router-dom"

export default function Home() {
    return (
        <section className="home">
            <h3>De Gruyter Wissenschaftsverlag</h3>
            <p>Als unabhängiger Wissenschaftsverlag veröffentlichen wir jedes Jahr über 1.500 Bücher und 16.000 Artikel aus 30 Fachgebieten. Darunter sind mehr als 200 Bücher und 5.000 Artikel im Open Access. Außerdem bieten wir rund 80 Datenbanken und Online References an, die ein sehr breites Spektrum an Fachgebieten abdecken.</p>
            <Link to="isbn-search" className="home-isbn-search-link">ISBN Search</Link>
        </section>
    )
}