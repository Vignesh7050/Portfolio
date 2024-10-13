import { useDisclosure } from '@nextui-org/react';

import { PortfolioRoadmapIFrame } from './portfolioRoadMapIFrame';
import { textConstants } from '@/utils';
import { Dialog } from '../base-components/dialog';
import { ButtonWrapper } from '../base-components/buttonWrapper';
import { IMAGES } from '@/assets/images';
import { ImageWrapper } from '..';

export const PortfolioRoadMap = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className='flex justify-center'>
      <ButtonWrapper
        onPress={onOpen}
        endContent={
          <ImageWrapper
            src={IMAGES.roadmapIcon}
            alt={textConstants.viewResume}
            width={18}
            height={18}
          />
        }
      >
        {textConstants.viewPortfolioRoadmap}
      </ButtonWrapper>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          headerText={textConstants.developmentRoadmap}
        >
          <PortfolioRoadmapIFrame />
        </Dialog>
      )}
    </div>
  );
};
