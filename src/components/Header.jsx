import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './css/Header.css';

export default function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(location.pathname);
    const navRef = useRef(null);
    const hamburgerRef = useRef(null);
    const indicatorRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && hamburgerRef.current && !hamburgerRef.current.contains(event.target) && window.innerWidth <= 768) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const links = document.querySelectorAll("nav a");
        const indicator = indicatorRef.current;

        function moveIndicator(el) {
            if (indicator && el) {
                indicator.style.width = el.offsetWidth + "px";
                indicator.style.left = el.offsetLeft + "px";
            }
        }

        links.forEach(link => {
            link.addEventListener("click", () => {
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
                moveIndicator(link);
            });
        });

        const activeLink = document.querySelector("nav a.active");
        if (activeLink) {
            moveIndicator(activeLink);
        }

        return () => {
            links.forEach(link => {
                link.removeEventListener("click", () => {});
            });
        };
    }, []);

    return (
        <header>
            <h1>PhisioEssence</h1>
            <nav ref={navRef} className={isMenuOpen ? 'open' : ''}>
                <ul>
                    <div ref={indicatorRef} className="indicator"></div>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}><li>Home</li></Link>
                    <Link to="/servicos" className={location.pathname === '/servicos' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}><li>Serviços</li></Link>
                    <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}><li>Sobre</li></Link>
                    <Link to="/contato" className={location.pathname === '/contato' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}><li>Contato</li></Link>
                </ul>
            </nav>
            <button ref={hamburgerRef} className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    )
}
