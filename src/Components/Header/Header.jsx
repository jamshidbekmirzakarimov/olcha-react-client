import "./Header.css"
import HeaderLogo from "../../Assets/Images/site-header-logo.svg"

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a className="site-header-logo" href="#link">
          <img
            src={HeaderLogo}
            alt="placeholder"
            width={150}
            height={150}
          />
        </a>

        <nav className="ghj">
          <h1 className="title">
            Header
          </h1>
        </nav>
      </div>
    </header>
  );
}

export default Header;