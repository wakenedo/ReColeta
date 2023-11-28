import ProfileImage from '../../../assets/img/perfil.png'

interface UserAreaProps {
  userData: {
    firstName?: string;
    lastName?: string;
  } | null;
}

export const UserArea: React.FC<UserAreaProps> = ({ userData }) => {
  const userName = userData ? `${userData.firstName} ${userData.lastName}` : `Usuário`;

  return (
    <a className="navbar-brand" href="/">
      <div className="username-container">
        <img src={ProfileImage} width="30" height="30" className="d-inline-block align-top" alt="" />
        <span>{userName}</span>
      </div>
    </a>
  )
}