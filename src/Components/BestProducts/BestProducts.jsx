import "./BestProducts.css";
import { products } from "../../data/products";
function BestProducts() {
  return (
    <section className="best-product-section">
      <div className="container">
        <h2 className="best-product-section-title">
          Oyning eng mashhur tovarlari
        </h2>
        <p className="best-product-section-sub">
          🔎 Qidiruv tizimlaridagi so'rovlar, ⭐️ platformadagidagi sharhlar va
          ❤️ ijtimoiy tarmoqlardagi postlar soni bo'yicha
        </p>

        <ul className="best-product-section-list">
          {products.slice(0, 8).map((product) => (
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
        <button className="best-product-btn">Mashhur tovarlar</button>
      </div>
    </section>
  );
}

export default BestProducts;
