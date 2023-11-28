import { ContainerContent } from "../../System/Containers/ContainerContent"
import { UserAreaActions } from "./UserAreaActions"
import { UserAreaDemands } from "./UserAreaDemands"

export const UserActionsAndDemands = () => {
  return (
    <ContainerContent>
      <div className="container-user-actions-background">
        <UserAreaActions />
        <UserAreaDemands />
      </div>
    </ContainerContent>
  )

}