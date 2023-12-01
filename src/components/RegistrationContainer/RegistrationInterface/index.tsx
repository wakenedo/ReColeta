import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/apiClient";
import { WasteProducerIcon } from "../InteractiveIcons/WasteProducerIcon";
import { WasteCollectorIcon } from "../InteractiveIcons/WasteCollectorIcon";

export const RegistrationInterface = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [errors, setErrors] = useState<string[]>([]); // Updated state for multiple errors
  const navigate = useNavigate();

  const handleSelectUserType = (selectedUserType: string) => {
    // Clear previous errors
    setErrors([]);

    // Check for user type errors and update the error state
    if (!selectedUserType) {
      addError('Por favor, selecione um tipo de usuário.');
    } else {
      // Remove the user type error if a valid type is selected
      setErrors(errors.filter((error) => error !== 'Por favor, selecione um tipo de usuário.'));
    }

    setUserType(selectedUserType);
  };

  const addError = (error: string) => {
    if (!errors.includes(error)) {
      setErrors([...errors, error]);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors([]);



    // Populate errors array for validation
    if (!email.trim() || !emailRegex.test(email)) {
      addError('Por favor, insira um endereço de e-mail válido.');
    }
    if (!password.trim() || password.length < 8) {
      addError('A senha deve ter pelo menos 8 caracteres.');
    }
    if (!userType) {
      addError('Por favor, selecione um tipo de usuário.');
    }
    // If there are errors, return and display them
    if (errors.length > 0) {
      return;
    }

    try {
      const response = await registerUser({ email, password, firstName, lastName, userType });

      localStorage.setItem('userId', String(response.data.id));

      navigate('/dashboard');
    } catch (error: any) {
      console.error('Registration error:', error.message);
    }
  };

  console.log('userType:', userType)

  return (
    <div className="registration-box">
      <span>Register</span>
      <form className="registration-form" onSubmit={handleRegistration}>
        <div className="registration-form-header">
          <p className="registration-form-title">Bem vindos</p>
          <p className="registration-form-subtitle">Preencha os campos abaixo para se cadastrar no ReColeta </p>
          <p className="registration-header-message">
            Após o cadastro, você poderá acessar a plataforma e cadastrar novos
            pontos de coleta. Acompanhar os descartes de resíduos das empresas registradas próximas da sua localização.
            Encontrar parceiros para reciclagem e reutilização de resíduos. Além de contribuir para um meio ambiente
            mais sustentável.
          </p>
        </div>
        <div>
          <hr className="registration-form-header-hr" />
        </div>
        <div>
          <span>Email* :</span>
          <input
            type="text"
            placeholder="Registrar Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // Check for email errors and update the error state
              if (!e.target.value.trim() || !emailRegex.test(e.target.value)) {
                addError('Por favor, insira um endereço de e-mail válido.');
              } else {
                // Remove the email error if the input is valid
                setErrors(errors.filter((error) => error !== 'Por favor, insira um endereço de e-mail válido.'));
              }
            }}
            className={errors.includes('Por favor, insira um endereço de e-mail válido.') ? 'error' : ''}
          />
        </div>
        <div>
          <span>Senha* :</span>
          <input
            type="password"
            placeholder="Registrar Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // Check for password errors and update the error state
              if (!e.target.value.trim() || e.target.value.length < 8) {
                addError('A senha deve ter pelo menos 8 caracteres.');
              } else {
                // Remove the password error if the input is valid
                setErrors(errors.filter((error) => error !== 'A senha deve ter pelo menos 8 caracteres.'));
              }
            }}
            className={errors.includes('A senha deve ter pelo menos 8 caracteres.') ? 'error' : ''}
          />
        </div>
        <div>
          <span>Primeiro Nome :</span>
          <input
            type="firstName"
            placeholder="Primeiro Nome"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <span>Sobrenome :</span>
          <input
            type="lastName"
            placeholder="Sobrenome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <span>Escolha sua função* :</span>

          <div className="registration-form-icons-row">
            <WasteProducerIcon
              onSelect={() => handleSelectUserType('WASTE_PRODUCER')}
              isActive={userType === 'WASTE_PRODUCER'}
            />
            <WasteCollectorIcon
              onSelect={() => handleSelectUserType('COLLECTS_WASTE')}
              isActive={userType === 'COLLECTS_WASTE'}
            />
          </div>

        </div>
        <div className="registration-button">
          <button type="submit" className="button">
            Registrar
          </button>
        </div>
        {/* Display multiple errors */}
        {errors.length > 0 && (
          <div className="registration-warning">
            {errors.map((errMsg, index) => (
              <p key={index}>{errMsg}</p>
            ))}
          </div>
        )}
        <div className="registration-login-link">
          <Link to="/login">Já tem cadastro? Faça login aqui.</Link>
        </div>
      </form>
    </div>
  );
};
