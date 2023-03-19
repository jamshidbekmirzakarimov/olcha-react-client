import "./Hero.css";

import { products } from "../../data/products";
import MixerImg from "../../Assets/Images/mikser.png";
import MuzlatImg from "../../Assets/Images/sovutgich.png";
import MevaImg from "../../Assets/Images/meva.png";
import MesarovkaImg from "../../Assets/Images/mesarovka.png";
import DiskTelImg from "../../Assets/Images/disktel.png";
import BookAllImg from "../../Assets/Images/bookallergiya.png";
import BookIbiImg from "../../Assets/Images/bookibtido.png";
import HeroBg from "../../Assets/Images/hero-section-bg.svg";
import CardImg from "../../Assets/Images/hero-card-img.png";
function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <ul className="hero-section-list">
          {products.slice(0,8).map((product) => (
            <li className="hero-section-title">
               <img src={product.image} width={60} height={60} alt={product.title}  />
           </li>
           
             ))}
        </ul>

        <div className="hero-section-wrapper">
          <div className="hero-section-img-box">
            <img
              className="hero-section-img"
              src={HeroBg}
              alt="hero bg"
              width={100}
              height={100}
            />
          </div>
          <div className="hero-section-card">
            <p className="hero-section-card-title">Baxt yetkazish</p>
            <h3 className="hero-section-card-subtitle">Toni shey</h3>
            <img
              className="hero-section-card-img"
              src={CardImg}
              alt="card img"
              width={130}
              height={190}
            />
            <button className="hero-card-btn">Batafsil</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
