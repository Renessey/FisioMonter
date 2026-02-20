import "./css/Footer.css";
import { Link } from "react-router-dom";
import "../Home";
import "../Sobre";
import "../Servicos";
import "../Contato";

export default function Footer() {
  return (
    <div className="footer">
        <div className="info-footer">
          <p>© 2026 Physio Essence, Inc. All rights reserved.</p>
          <p>Feito por: Renan Monteiro Silva</p>
          <p>Email: <a href="mailto:FisioMonter@gmail.com" target="_blank" rel="noopener noreferrer">FisioMonter@gmail.com</a></p>
        </div>

        <div className="infosite">
          <Link to="/" id="footerid">Home</Link>
          <Link to="/sobre" id="footerid">Sobre</Link>
          <Link to="/servicos" id="footerid">Serviços</Link>
          <Link to="/contato" id="footerid">Contatos</Link>
        </div>

        <div className="sociais-footer">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              color="white"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <p>Instagram</p>
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              color="white"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <p>Whatsapp</p>
          </a>
        </div>
      </div>
  );
}
