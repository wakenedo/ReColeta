import { Link } from 'react-router-dom'
import styles from '../../../../style/userArea.module.css'

import { UserActionsButtonsData } from './data'


export const UserAreaActions = () => {
  return (
    <div className={styles["container-user-actions"]}>
      <div className={styles["profile-section-title"]}>
        <span>
          Ações do usuário
        </span>
        <div className={styles["profile-section-border"]}>
          <div className={styles["user-actions-icons"]}>
            {UserActionsButtonsData.map((item) => {
              return (
                <Link key={item.id} to={item.path}>
                  <img className={styles["pressable-icons"]} src={item.image} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}