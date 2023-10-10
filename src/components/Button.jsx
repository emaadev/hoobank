import styles from '../style'
import PropTypes from "prop-types";

const Button = ({ textContent }) => {
  return (
    <button type='button' className={`mt-[20px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        { textContent }
    </button>
  )
}

Button.propTypes = {
  textContent: PropTypes.string.isRequired
}

export default Button