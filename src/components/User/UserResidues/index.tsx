import { ContainerContent } from "../../System/Containers/ContainerContent"
import AddButton from '../../../assets/img/btn-adicionar.svg'
import styles from '../../../style/userArea.module.css'

export const UserResidues = () => {
  return (
    <ContainerContent>
      <div className={styles["container-my-address"]}>
        <div className={styles["container-gradient"]}>
          <div className={styles["container-white"]}>
            <div className={styles["container-my-address-title"]}>
              Meus residos
            </div>
            <div className={styles["information-block"]}>
            </div>
            <div className={styles["information-block"]}>
            </div>
            <div className={styles["new-address"]}>
              <span>Novo resido</span>
              <img src={AddButton} alt="Botão para adicionar novo endereo" />
            </div>
          </div>
        </div>
      </div>
    </ContainerContent>
  )
}