import { UserAreaDotMenuProps } from "../../../../Types/SystemComponentsTypes/UserAreaDotMenuProps";


export const UserAreaDotMenu: React.FC<UserAreaDotMenuProps> = ({ activeIndex, handleDotClick }) => {
  const dotCount = 5; // Assuming you have 4 sections, you can adjust this based on your actual sections

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      const dotClass = i === activeIndex ? 'dot active' : 'dot';
      dots.push(
        <div
          key={i}
          className={dotClass}
          onClick={() => handleDotClick(i)}
        ></div>
      );
    }
    return dots;
  };

  return <div className="dot-menu">{renderDots()}</div>;
};




