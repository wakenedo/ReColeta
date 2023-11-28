import { Header } from "../../components/Header";
import { DefaultContainer as UserAreaContainer } from "../../components/System/Containers/DefaultContainer";
import { UserSwipeableInterface } from "../../components/User/UserSwipeableInterface";
import '../../style/userArea.module.css'


export const UserAreaPage = () => {
  return (
    <>
      <Header />
      <>
        <UserAreaContainer>
          <UserSwipeableInterface />
        </UserAreaContainer>

      </>
    </>
  );
};
