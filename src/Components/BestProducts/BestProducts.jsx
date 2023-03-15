import "./BestProducts.css";

import BestProductCardImg from "../../Assets/Images/best-product-card-img.png"

function BestProducts() {
  return (
    <section className="best-product-section">
      <div className="container">
        <h2 className="best-product-section-title">
          Oyning eng mashhur tovarlari
        </h2>
        <p className="best-product-section-sub">🔎  Qidiruv tizimlaridagi so'rovlar,  ⭐️  platformadagidagi sharhlar va  ❤️  ijtimoiy tarmoqlardagi postlar soni bo'yicha</p>

        <ul className="best-product-section-list">
          <li className="best-product-section-item">
            <img className="best-product-item-img" src={BestProductCardImg} alt="komp"/>
            <span className="best-product-">2 787 000 so’m</span>
            <p className="best-product-price-month">271 000 so’m/oyiga</p>
            <h3 className="best-product-item-title">Apple iPhone 12 Pro Max 512GB Dual, Pacific Blue</h3>
            
          </li>
          <li className="best-product-section-item">
            <img className="best-product-item-img" src={BestProductCardImg} alt="komp"/>
            <span className="best-product-">12 787 000 so’m</span>
            <p className="best-product-price-month">271 000 so’m/oyiga</p>
            <h3 className="best-product-item-title">Ноутбук Apple MacBook Pro 13 16GB/1TB 2020 </h3>
            
          </li>
          <li className="best-product-section-item">
            <img className="best-product-item-img" src={BestProductCardImg} alt="komp"/>
            <span className="best-product-">8 532 000 so’m</span>
            <p className="best-product-price-month">271 000 so’m/oyiga</p>
            <h3 className="best-product-item-title">Кондиционер Technobox Pantera 18</h3>
            
          </li>
          <li className="best-product-section-item">
            <img className="best-product-item-img" src={BestProductCardImg} alt="komp"/>
            <span className="best-product-">110 000 so’m</span>
            <p className="best-product-price-month">271 000 so’m/oyiga</p>
            <h3 className="best-product-item-title">Футболка YOKI "Bu qora futbolka"</h3>
            
          </li>
          <li className="best-product-section-item">
            <img className="best-product-item-img" src={BestProductCardImg} alt="komp"/>
            <span className="best-product-">3 200 000 so’m</span>
            <p className="best-product-price-month">271 000 so’m/oyiga</p>
            <h3 className="best-product-item-title">Samsung Galaxy S 10+</h3>
            
          </li>
          <li className="best-product-section-item">
            <img className="best-product-item-img" src={BestProductCardImg} alt="komp"/>
            <span className="best-product-">2 787 000 so’m</span>
            <p className="best-product-price-month">271 000 so’m/oyiga</p>
            <h3 className="best-product-item-title">Black super customizable umbrella</h3>
            
          </li>
          <li className="best-product-section-item">
            <img className="best-product-item-img" src={BestProductCardImg} alt="komp"/>
            <span className="best-product-">97 000 so’m</span>
            <p className="best-product-price-month">271 000 so’m/oyiga</p>
            <h3 className="best-product-item-title">HyperX dual bits earphones</h3>
            
          </li>
          <li className="best-product-section-item">
            <img className="best-product-item-img" src={BestProductCardImg} alt="komp"/>
            <span className="best-product-">360 000 so’m</span>
            <p className="best-product-price-month">271 000 so’m/oyiga</p>
            <h3 className="best-product-item-title">Apple iPhone 12 Pro Max 512GB Dual, Pacific Blue</h3>
            
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BestProducts;
