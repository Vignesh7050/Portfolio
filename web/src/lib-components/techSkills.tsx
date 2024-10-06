'use client';

import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

import { KeyValuePair, skillsList, textConstants } from '@/utils';
import { SectionContainer } from './sectionContainer';

export const TechSkills = () => {
  return (
    <SectionContainer
      id='techSkills'
      headerName={textConstants.technicalSkills}
    >
      <div className='flex justify-center items-center flex-wrap cursor-pointer gap-10 '>
        {skillsList.map((skill: KeyValuePair, index: number) => (
          <Tooltip
            content={skill.titleContent}
            className='bg-foreground text-background'
            key={index}
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              priority
              width={70}
              height={70}
            />
          </Tooltip>
        ))}
      </div>
    </SectionContainer>
  );
};
