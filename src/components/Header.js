import "../styles/header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1 className="title">Linces Ibericos</h1>
      </div>
      <div className="clearfix"></div>
      {/* Esto no sabemos si lo vamos a dejar <nav className="">
          <ul>
            <li>
              <a href="index.html">INICIO</a>
            </li>

            <li>
              <a href="contacto.html">CONTACTO</a>
            </li>
            <li>
              <a href="about-me.html">SOBRE MI</a>
            </li>
          </ul>
        </nav> */}
    </header>
  );
};

export default Header;
