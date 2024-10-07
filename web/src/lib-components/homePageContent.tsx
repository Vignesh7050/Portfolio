'use client';

import Image from 'next/image';

import { profileContent, textConstants } from '@/utils';
import { IMAGES } from '@/assets/images';
import { PortfolioRoadMap } from './roadmap/portfolioRoadMap';

type HomePageContentProps = {
  pageContent: any;
};

export const HomePageContent = (props: HomePageContentProps) => {
  const { pageContent = profileContent } = props;

  return (
    <div
      className='flex flex-col justify-center items-center w-full min-h-screen gap-3 scroll-mt-18'
      id='home'
    >
      <h2 className='text-4xl text-center p-10 flex'>
        {textConstants.hello}
        <Image
          priority
          src={IMAGES.waveImg}
          alt='wave'
          width={40}
          height={40}
        />
        , I&apos;m
      </h2>
      <h1>
        <strong className='text-header-color text-5xl'>
          {pageContent.authorName}
        </strong>
      </h1>
      <h2 className='text-3xl'>{pageContent.authorDesignation}</h2>
      <p className='text-lg p-3 pb-20 text-center'>
        {pageContent.profileSummary}
      </p>
      <PortfolioRoadMap />
    </div>
  );
};
