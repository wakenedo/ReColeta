import { LoginInterface } from './LoginInterface';
import ReColeta from '../../assets/img/reColetaLogo.png'
import './styles/LoginContainerStyles.css'

export const LoginContainer = () => {
  return (
    <div className="login-container">
      <div className="login-box-background">
        <div className="login-box-container">
          <div className="container-login-logo">
            <img className="login-logo" src={ReColeta} alt="reColeta" />
          </div>
          <LoginInterface />
        </div>
      </div>
    </div>
  );
};
