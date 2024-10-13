'use client';

import { Tooltip } from '@nextui-org/react';

import { KeyValuePair, skillsList, textConstants } from '@/utils';
import { SectionContainer } from './sectionContainer';
import { ImageWrapper } from './base-components/imageWrapper';

export const TechSkills = () => {
  return (
    <SectionContainer id='techstack' headerName={textConstants.techStack}>
      <div className='flex justify-center items-center flex-wrap cursor-pointer gap-10 '>
        {skillsList.map((skill: KeyValuePair, index: number) => (
          <Tooltip
            content={skill.titleContent}
            className='bg-foreground text-background'
            key={index}
          >
            <ImageWrapper
              src={skill.src}
              alt={skill.alt}
              width={70}
              height={70}
            />
          </Tooltip>
        ))}
      </div>
    </SectionContainer>
  );
};
