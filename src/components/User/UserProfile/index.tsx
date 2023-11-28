import { ContainerContent } from "../../System/Containers/ContainerContent"
import { ProfileHeader } from "./ProfileHeader"
import styles from '../../../style/userArea.module.css'
import { useEffect, useState } from "react";
import { getUserById } from "../../../api/apiClient";
import { ServerUserData } from "../../../Types/SystemComponentsTypes/UserRegistrationData";




export const UserProfile = () => {
  const [userData, setUserData] = useState<ServerUserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log('Error:', error, setLoading);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      setError('User ID not found.');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await getUserById(Number(userId));
        setUserData(response.data);
      } catch (error) {
        setError('Error fetching user data.');
      }
    };

    fetchUserData();
  }, []);

  // Function to update user data
  const updateUser = async (userId: number) => {
    try {
      const response = await getUserById(userId);
      setUserData(response.data);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  console.log('User data:', userData);

  return (
    <div className="interface-screen-adapter">
      <ContainerContent>
        <ProfileHeader />
        {loading && <p>Loading...</p>}
        {!loading && userData && (
          <>
            <section className={styles["profile-section"]}>
              <div className={styles["profile-section-title"]}>
                <span>
                  Perfil
                </span>
              </div>
              <div className={styles["profile-section-border"]}>
                <div className={styles["profile-user-information"]}>
                  <span>Nome</span>
                  <p>
                    {userData?.firstName} {userData?.lastName}
                  </p>
                  <span>E-mail</span>
                  <p>
                    {userData.email}
                  </p>
                  <span>Telefone</span>
                  <p>
                    (11)99999-0000
                  </p>
                </div>
                <div className={styles["profile-buttons"]}>
                  <button type="submit">Alterar senha</button>
                  <button onClick={() => updateUser(userData?.id)}>Editar perfil</button>
                </div>
              </div>
            </section>
            <section className={styles["profile-section"]}>
              <div className={styles["profile-section-title"]}>
                <span>
                  Estatisticas
                </span>
              </div>
              <div className={styles["profile-section-border"]}>
                <div className={styles["profile-stats-information"]}>

                </div>
              </div>
            </section>
          </>
        )}
      </ContainerContent>
    </div>
  )
}