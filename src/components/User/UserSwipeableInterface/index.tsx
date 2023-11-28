import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { UserProfile } from '../UserProfile';
import { UserAddress } from '../UserAddress';
import { UserAreaNews } from '../UserAreaNews';
import { UserResidues } from '../UserResidues';
import { UserActionsAndDemands } from '../UserActionAndDemandsSection';
import { UserAreaDotMenu } from '../../System/DotMenu/UserAreaDotMenu';


export const UserSwipeableInterface = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex < 4) {
        setActiveIndex(activeIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    },
  });

  return (
    <>
      <div {...handlers}>
        {activeIndex === 0 && <UserProfile />}
        {activeIndex === 1 && <UserActionsAndDemands />}
        {activeIndex === 2 && <UserAddress />}
        {activeIndex === 3 && <UserAreaNews />}
        {activeIndex === 4 && <UserResidues />}
      </div>
      <UserAreaDotMenu activeIndex={activeIndex} handleDotClick={setActiveIndex} />
    </>
  );
};