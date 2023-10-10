import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="invisible sm:visible" /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With our security data structure, you can do a lot of transactions per day.</p>

      <Button textContent="Get Started" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal