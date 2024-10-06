'use client';
import { profileContent, textConstants } from '@/utils';
import { Button, useDisclosure } from '@nextui-org/react';
import { Dialog } from './modals/dialog';
import { PortfolioRoadMap } from '.';

type HomePageContentProps = {
  pageContent: any;
};

export const HomePageContent = (props: HomePageContentProps) => {
  const { pageContent = profileContent } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      className='flex flex-col justify-center items-center w-full min-h-screen gap-3'
      id='home'
    >
      <h2 className='text-4xl text-center p-10'>Hello &#128075;, I&apos;m </h2>
      <h1>
        <strong className='text-header-color text-6xl'>
          {pageContent.authorName}
        </strong>
      </h1>
      <h2 className='text-3xl'>{pageContent.authorDesignation}</h2>
      <p className='text-lg p-3 pb-20 text-center'>
        {pageContent.profileSummary}
      </p>
      <Button
        className='border border-dotted text-foreground'
        onPress={onOpen}
        size='md'
        variant='bordered'
        color='secondary'
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
