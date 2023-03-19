import "./NewProducts.css";

import { products } from "../../data/products";
function NewProducts() {
  return (
    <section className="best-product-section">
      <div className="container">
        <h2 className="best-product-section-title">Yangi tovarlar</h2>
        <p className="best-product-section-sub">
          Shu hafta ichida keltirilgan va admin paneldagi 📊 statistika bo’yicha
          odamlarda ko’p qiziqish uyg’otayotgan tovarlar
        </p>

        <ul className="best-product-section-list">
          {products.slice(8, 16).map((product) => (
            <li className="best-product-section-item">
              <img
                className="best-product-item-img"
                src={product.image}
                alt="komp"
                width={200}
              />
              <span className="best-product-price">{product.price}$</span>
              <h3 className="best-product-item-title">
                {product.title.slice(0, 50)}...
              </h3>
            </li>
          ))}
        </ul>
        <button className="best-product-btn">Barcha yangi tovarlar</button>
      </div>
    </section>
  );
}

export default NewProducts;
