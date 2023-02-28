import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <p>GERAFISIO</p>
          </Link>
        </div>
        <div role="button" aria-label="Redes Sociais">
          <a
            href="https://www.instagram.com/gera.fisio/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href=" mailto:gerafisio@uepg.br"
            target="_blank"
            aria-label="Email"
          >
            <i id="icon" className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Header;
