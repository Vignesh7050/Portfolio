'use client';
import { profileContent, textConstants } from '@/utils';
import { Button, useDisclosure } from '@nextui-org/react';
import { Dialog } from '../modals/dialog';
import { PortfolioRoadMap } from '..';

type HomePageContentProps = {
  pageContent: any;
};

export const HomePageContent = (props: HomePageContentProps) => {
  const { pageContent = profileContent } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      className='flex flex-col justify-center items-center w-full min-h-screen'
      id='home'
    >
      <h1 className='text-3xl text-center p-10'>
        Hello &#128075;, I&apos;m{' '}
        <strong className='text-header-color text-4xl whitespace-nowrap'>
          {pageContent.authorName}
        </strong>
      </h1>
      <h2 className='text-2xl'>{pageContent.authorDesignation}</h2>
      <p className='text-1xl p-3 pb-20 text-center'>
        {pageContent.profileSummary}
      </p>
      <Button
        className='border'
        onPress={onOpen}
        size='md'
        color='secondary'
        variant='bordered'
      >
        {textConstants.viewPortfolioRoadmap}
      </Button>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          headerText={textConstants.developmentRoadmap}
        >
          <PortfolioRoadMap />
        </Dialog>
      )}
    </div>
  );
};
