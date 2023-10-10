import styles from '../style'
import { robot } from '../assets'
import GetStarted from './GetStarted'
import AccountDiscount from './AccountDiscount'

const Hero = () => {
  return (
    <section id='home' className="flex md:flex-row flex-col">
      <div className={`flex-1 ${styles.flexStart} px-6 flex-col xl:px-0 sm:pl-20 sm:mr-10`}>
        <AccountDiscount />

        <div className='flex flex-row justify-between items-center w-full mt-[20px]'>
          <h1 className='text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[80px] leading-[60px]'>
            The Next <br className='invisible sm:visible'/> {" "}
            <span className='text-gradient'>Generation</span> <br className='invisible sm:visible'/> {" "}
          </h1>

          <div className='ss:flex invisible ss:visible md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[80px] leading-[60px] w-full'>
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} mt-5 max-w-[600px]`}>
          Our team of experts uses a metodology to identify a credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billings" className='w-[600px] h-[600px] relative z-[5] object-contain' />

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero