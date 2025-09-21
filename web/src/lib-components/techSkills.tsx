'use client';

import { SectionContainer } from './sectionContainer';
import { ImageWrapper } from './base-components/imageWrapper';
import { KeyValuePair, skillsList, textConstants } from '@/utils';

export const TechSkills = () => {
  // Group skills by 'group' property dynamically
  const groupedSkills = skillsList.reduce((acc: Record<string, KeyValuePair[]>, skill) => {
    if (!acc[skill.group]) acc[skill.group] = [];
    acc[skill.group].push(skill);
    return acc;
  }, {});

  return (
    <SectionContainer id='techstack' headerName={textConstants.techStack}>
      <div className='flex flex-wrap justify-center gap-8'>
        {Object.entries(groupedSkills).map(([groupName, skills], index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 shadow-lg rounded-xl p-12 flex flex-col items-center w-80 transition-transform hover:scale-105'
          >
            <h3 className='text-lg font-semibold mb-10'>{groupName}</h3>
            <div className='grid grid-cols-2 gap-8'>
              {skills.map((skill: KeyValuePair, i: number) => (
                <div key={i} className='flex flex-col items-center'>
                  <ImageWrapper
                    src={skill.src}
                    alt={skill.alt}
                    width={80}
                    height={80}
                  />
                  <span className='mt-2 text-sm text-center'>{skill.titleContent}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
