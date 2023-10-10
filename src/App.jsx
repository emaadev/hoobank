import styles from "./style.js";

// Components
import {
    Billing,
    Business,
    CardDeal,
    Clients,
    CTA,
    Footer,
    Hero,
    Navbar,
    Stats,
    Testimonials
} from './components'

function App() {
  return(
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} z-[999]`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}` }>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />

          <div className={styles.flexCenter}>
            <CTA />
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
} 

export default App;