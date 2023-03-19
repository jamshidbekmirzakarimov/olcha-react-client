import Hero from "../Hero/Hero";
import BestProducts from "../BestProducts/BestProducts";
import Arzon from "../Arzon/Arzon";
import NewProducts from "../NewProducts/NewProducts";
import "./Main.css";

function Main() {
  return (
    <main className="main-site">
      <Hero />
      <BestProducts />
      <Arzon />
      <NewProducts/>
    </main>
  );
}

export default Main;
