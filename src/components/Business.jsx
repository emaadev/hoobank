import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"
import FeaturesCard from "./FeaturesCard"

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} sm:leading-[60px] leading-[40px]`}>You do the business, <br className="sm:invisible visible"/> we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button textContent={"Get Started"} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeaturesCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Business