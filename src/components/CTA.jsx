import styles from "../style"
import Button from "./Button"


const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[1100px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col sm:mr-[80px] mr-0">
      <h2 className={`${styles.heading2} leading-[50px] sm:leading-[50px] mt-5 sm:mt-0 max-w-[400px]`}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-3 mb-3 sm:mb-0`}>
      <Button textContent="Get Started"/>
    </div>
  </section>
)

export default CTA