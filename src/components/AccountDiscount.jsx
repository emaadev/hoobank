import styles from "../style"
import { discount } from "../assets"

const AccountDiscount = () => {
  return (
    <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For {" "}
            <span className='text-white'>1 month</span> Acount
        </p>
    </div>
  )
}

export default AccountDiscount