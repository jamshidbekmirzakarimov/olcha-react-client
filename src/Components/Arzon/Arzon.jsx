import "./Arzon.css"

import OlchaLogo from "../../Assets/Images/olcha-icon.svg"

function Arzon() {
  return (
    <section className="arzon-section">
      <div className="container">
        <div className="arzon-section-wrapper">
          <div className="arzon-section-text">
            <h2 className="arzon-section-title">
            Nega bunchalik <span className="arzon-section-mark">arzon</span> narxlar
            </h2>
            <p className="arzon-section-subtitle">Biz oflaynda sotmaymiz va reklama uchun pul sarflamaymiz. Shuningdek, bizning ishlab chiqarish Xitoyda joylashgan va biz buni yashirmaymiz. Biz sifatni kafolatlaymiz, chunki biz har bir mahsulotni o'zimiz nazorat qilamiz.</p>
          </div>
          <img src={OlchaLogo} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Arzon;