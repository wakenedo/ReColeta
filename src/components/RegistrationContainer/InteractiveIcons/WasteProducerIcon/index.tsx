
import WasteProducerIconDefault from '../../../../assets/img/RegisterArea/oilTower.png';
import WasteProducerIconActive from '../../../../assets/img/RegisterArea/oilTowerWhite.png';

interface IconProps {
  onSelect: (role: string) => void;
  isActive: boolean;
}

export const WasteProducerIcon: React.FC<IconProps> = ({ onSelect, isActive }) => {



  const handleClick = () => {
    onSelect('WASTE_PRODUCER');
  };



  return (
    <div
      className={`icon-container-waste-producer ${isActive ? 'active' : ''}`}
      onClick={handleClick}


    >
      <p className="icon-title-waste-producer">Produtor de Resíduos</p>
      <img
        className="icon-image-waste-producer"
        src={isActive ? WasteProducerIconActive : WasteProducerIconDefault}
        alt={isActive ? 'wasteProducerActive' : 'wasteProducerDefault'}
      />
      <p className="icon-text-description-waste-producer">
        O usuário produtor de resíduos deve completar o cadastro para que possa ter acesso à plataforma e registrar seus resíduos.
      </p>
    </div>
  );
};

