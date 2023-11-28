import { ContainerContentProps } from '../../../../Types/SystemComponentsTypes/ContainerContent';

export const ContainerContent = ({ children }: ContainerContentProps) => {
  return (
    <div className="container-content">
      {children}
    </div>
  );
}
