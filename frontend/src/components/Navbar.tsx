import { useLocation, Link } from "react-router-dom"
import useDesktopSize from "../hooks/useDesktopSize"
import Footer from "./Footer"

export default function Navbar() {
    const location = useLocation()
    const desktopSize = useDesktopSize()

    return (
        <nav className="navbar">
            <div className="wrapper">
                <h2><Link to="/">De Gruyter{' '}</Link>{location.pathname === '/isbn-search' ? 'ISBN Search' : null}</h2>
                {desktopSize &&
                    <ul className="list">
                        <li className="list-element">
                            <a
                                className="link footer-link"
                                href="https://www.degruyter.com/publishing/impressum?lang=de"
                                target="_blank"
                                rel="noopener"
                                aria-label="Read Impressum">Impressum</a>
                        </li>
                        <span className="divider">|</span>
                        <li className="list-element">
                            <a
                                className="link footer-link"
                                href="https://www.degruyter.com/publishing/unsere-cookie-richtlinien?lang=de"
                                target="_blank"
                                rel="noopener"
                                aria-label="Read Cookies">Cookies</a>
                        </li>
                        <span className="divider">|</span>
                        <li className="list-element">
                            <a
                                className="link footer-link"
                                href="https://www.degruyter.com/publishing/ueber-uns/kontakt?lang=de"
                                target="_blank"
                                rel="noopener"
                                aria-label="Contact Us">Contact</a>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    )
}