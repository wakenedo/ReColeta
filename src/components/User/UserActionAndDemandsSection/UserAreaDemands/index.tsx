import styles from '../../../../style/userArea.module.css'

export const UserAreaDemands = () => {
  return (
    <div className={styles["container-user-demands"]}>
      <div className={styles["profile-section-title"]}>
        <span>
          Demandas ativas
        </span>
        <div className={styles["profile-section-border"]}>
          <div className={styles["profile-active-demands"]}>

          </div>
        </div>
      </div>
    </div>
  )
}