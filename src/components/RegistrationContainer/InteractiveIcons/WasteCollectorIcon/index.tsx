import '../styles/InteractiveIcons.css'
import WasteCollectorIconDefault from '../../../../assets/img/RegisterArea/RecyclingTruck.png'
import WasteCollectorIconActive from '../../../../assets/img/RegisterArea/RecyclingTruckWhite.png'

interface IconProps {
  onSelect: (role: string) => void;
  isActive: boolean;
}

export const WasteCollectorIcon: React.FC<IconProps> = ({ onSelect, isActive }) => {




  const handleClick = () => {
    onSelect('COLLECTS_WASTE');
  };

  return (
    <div
      className={`icon-container-waste-collector ${isActive ? 'active' : ''}`}
      onClick={handleClick}

    >
      <p className="icon-title-waste-collector">Coletor de Resíduos</p>
      <img
        className="icon-image-waste-collector"
        src={isActive ? WasteCollectorIconActive : WasteCollectorIconDefault}
        alt={isActive ? 'wasteCollectorActive' : 'wasteCollectorDefault'}
      />

      <p className="icon-text-description-waste-collector">
        O usuário coletor de resíduos pode buscar por coletas próximas à sua localização e começar a coletar resíduos.
      </p>
    </div>
  );
};