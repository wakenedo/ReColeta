import ReColeta from '../../assets/img/reColetaLogo.png'
import { RegistrationInterface } from './RegistrationInterface';
import './styles/RegistrationContainerStyles.css'

export const RegistrationContainer = () => {
  return (
    <div className="registration-container">
      <div className="registration-box-background">
        <div className="registration-box-container">
          <div className="container-registration-logo">
            <img className="registration-logo" src={ReColeta} alt="reColeta" />
          </div>
          <RegistrationInterface />
        </div>
      </div>
    </div>
  );
};
