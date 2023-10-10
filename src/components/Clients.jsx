import { clients } from "../constants"
import styles from "../style"

const Clients = () => (
  <section className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client, index) => (
      <div key={client.id} className={`flex-1 flex-wrap ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
        <img src={client.logo} alt={client.logo} className={`${index !== clients.length - 1 ? "mr-[50px]" : "mr-0"} sm:w-[192px] w-[100px] object-contain`} />
      </div>
    ))}
  </section>
)

export default Clients
