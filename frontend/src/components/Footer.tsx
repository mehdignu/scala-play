import '../styles/partials/_Footer.module.sass'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
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
            </div>
        </footer>
    )
}