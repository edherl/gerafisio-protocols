import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <h1>Protocolos</h1>

      <h2>
        <span>01 </span>Antropometria
      </h2>
      <div className="list">
        <Link to="/imc">
          <li>IMC</li>
        </Link>
        <Link to="/bioimpedancia">
          <li>Bioimpedância</li>
        </Link>
        <Link to="/pregas-cutaneas">
          <li>Pregas Cutâneas</li>
        </Link>
        <Link to="/perimetros-de-circunferiencia">
          <li>Circunferências</li>
        </Link>
      </div>
      <hr />

      <h2>
        <span>02 </span>Flexibilidade
      </h2>
      <div className="list">
        <Link to="/wells">
          <li>Banco de Wells</li>
        </Link>
        <Link to="/sentar-e-levantar">
          <li>Sentar e Levantar</li>
        </Link>
      </div>
      <hr />

      <h2>
        <span>03 </span>Força e Resistência
      </h2>
      <div className="list">
        <Link to="/flexao-de-cotovelos">
          <li>Flexão de Cotovelos</li>
        </Link>
        <Link to="/dinamometria-manual">
          <li>Dinamometria Manual</li>
        </Link>
        <Link to="/tc6">
          <li>TC6</li>
        </Link>
      </div>
    </nav>
  );
}

export default Home;
