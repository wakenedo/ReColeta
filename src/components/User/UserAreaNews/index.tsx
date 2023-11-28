import { ContainerContent } from "../../System/Containers/ContainerContent"
import styles from '../../../style/userArea.module.css'

export const UserAreaNews = () => {
  return (
    <ContainerContent>
      <div className={styles["container-user-actions-background"]}>
        <div className={styles["container-user-news"]}>
          <div className={styles["profile-section-title"]}>
            <span>
              Noticias
            </span>
            <div className={styles["profile-section-border"]}>
              <div className={styles["user-actions-icons"]}>

              </div>
            </div>
          </div>
        </div>
        <div className={styles["container-user-demands"]}>
          <div className={styles["profile-section-title"]}>
            <span>
              Projetos
            </span>
            <div className={styles["profile-section-border"]}>
              <div className={styles["profile-active-demands"]}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerContent>
  )
} 