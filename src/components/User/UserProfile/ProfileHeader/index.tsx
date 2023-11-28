import styles from '../../../../style/userArea.module.css'

import UserIcon from '../../../../assets/img/icon-user.svg'

export const ProfileHeader = () => {
  return (
    <div className={styles["profile-header"]}>
      <p>Area do usuário</p>
      <div className={styles["profile-header-photo"]}>
        <img src={UserIcon} alt="perfil" />
      </div>
    </div>
  )
}