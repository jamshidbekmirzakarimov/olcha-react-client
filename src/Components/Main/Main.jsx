import Hero from "../Hero/Hero"
import BestProducts from "../BestProducts/BestProducts"
import "./Main.css"

function Main() {
  return (
    <main className="main-site">
      <Hero />
      <BestProducts/>
    </main>
  );
}

export default Main;