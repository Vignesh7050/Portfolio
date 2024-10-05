'use client';

import style from './homePageContent.module.css';
import { profileContent } from '@/utils';
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
    <div className={style.homePageContentContainer} id='home'>
      <h1 className={style.greetingText}>
        Hello &#128075;, I&apos;m{' '}
        <strong className='text-header-color text-5xl'>
          {pageContent.authorName}
        </strong>
      </h1>
      <h2 className={style.authorDesignation}>
        {pageContent.authorDesignation}
      </h2>
      <p className={style.profileSummary}>{pageContent.profileSummary}</p>
      <Button
        className='border'
        onPress={onOpen}
        size='md'
        color='secondary'
        variant='bordered'
      >
        View portfolio Roadmap
      </Button>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          headerText='Development Roadmap'
        >
          <PortfolioRoadMap />
        </Dialog>
      )}
    </div>
  );
};
