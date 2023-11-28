import { ContainerContentProps } from "../../../../Types/SystemComponentsTypes/ContainerContent"


export const DefaultContainer = ({ children }: ContainerContentProps) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
