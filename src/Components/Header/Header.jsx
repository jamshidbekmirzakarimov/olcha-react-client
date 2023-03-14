import "./Header.css";
import HeaderLogo from "../../Assets/Images/site-header-logo.svg";
import LupaImg from "../../Assets/Images/lupa.svg";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-top">
          <ul className="site-header-lang-list">
            <li className="site-header-lang-item">O’zb</li>
            <li className="site-header-lang-item">Rus</li>
            <li className="site-header-lang-item">Eng</li>
          </ul>
          <div className="site-header-menu">
            <ul className="site-header-menu-list">
              <li className="site-header-menu-item">
                <a className="site-header-menu-link" href="#link">
                  Chegirmalar
                </a>
              </li>
              <li className="site-header-menu-item">
                <a className="site-header-menu-link" href="#link">
                  Yetkazib berish
                </a>
              </li>
              <li className="site-header-menu-item">
                <a className="site-header-menu-link" href="#link">
                  Yordam
                </a>
              </li>
              <li className="site-header-menu-item">
                <a className="site-header-menu-link" href="#link">
                  Bo’lib to’lash
                </a>
              </li>
            </ul>
            <div className="site-header-tonight">
              <label className="label-text" htmlFor="tonig">
                Tungi rejim
              </label>
              <label className="switch">
                <input type="checkbox" id="tonig" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="site-header-middle">
          <div className="site-header-middle-start">
            <a className="site-header-logo" href="#link">
              <img
                className="site-header-log-img"
                src={HeaderLogo}
                alt="site-header-logo"
                width={130}
                height={24}
              />
            </a>
            <form
              className="form-box"
              action="https://echo.htmlacademy.ru/"
              method="POST"
            >
              <select className="select-box" name="" id="">
                <option value="Katalog">Katalog</option>
              </select>

              <label className="input-label" htmlFor="qwer">
                <input
                  className="input-search"
                  type="search"
                  name="search"
                  placeholder="Tovar qidiring"
                  ariaLabel="search tovarlar"
                />
                <button className="site-header-search-btn">
                  <img className="btn-lupa-img" src={LupaImg} alt="lupaImg" />
                </button>
              </label>
            </form>
          </div>
          <ul className="site-header-middle-list">
            <li className="site-header-middle-item">Profil</li>
            <li className="site-header-middle-item">Saqlangan</li>
            <li className="site-header-middle-item">Savat</li>
          </ul>
        </div>
        <nav className="site-nav">
          <ul className="site-nav-list">
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Telefonlar
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Konditsionerlar
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Kitoblar
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Kompyuterlar va ofis buyumlari
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Geymerlar uchun
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Maishiy texnika
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Televizorlar
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Yozgi kiyimlar
              </a>
            </li>
            <li className="site-nav-item">
              <a className="site-nav-link" href="#link">
                Idish-tovoqlar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
