import { useEffect, useState } from 'react';
import { NavMenu } from './NavMenu'
import { UserArea } from './UserArea'
import './styles/HeaderStyles.css'
import { ServerUserData } from '../../Types/SystemComponentsTypes/UserRegistrationData';
import { getUserById } from '../../api/apiClient';

export const Header = () => {
  const [userData, setUserData] = useState<ServerUserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      setLoading(!loading);
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
    console.log(error)

    fetchUserData();
  }, []);

  return (
    <header className="nav-box-background">
      <nav className="navbar navbar-expand-lg">
        <UserArea userData={userData} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavMenu />

      </nav>
    </header>
  )
}