'use client';

import { KeyValuePair, textConstants, workExperience } from '@/utils';
import { SectionContainer } from './sectionContainer';
import { EntityHeader } from './entityHeading';
import { EntityDisplayStartEndDate } from './entityDisplayStartEndDate';
import { ResumeSection } from './resume/resumeSection';
import { PortfolioRoadMap } from '.';

export const WorkExperience = () => {
  return (
    <SectionContainer id='experience' headerName={textConstants.experience}>
      {workExperience.map((experience: KeyValuePair, index: number) => {
        return (
          <ul className='list-none' key={`${experience.id}-${index}`}>
            <li className='gap-2'>
              <EntityHeader entityHeader={experience.companyName} />
              <EntityDisplayStartEndDate
                startDate={experience.joiningDate}
                endDate={experience.lastWorkingDate || textConstants.present}
                className='text-center md:text-start '
              />
              <ul className='list-disc p-5 px-10'>
                {experience.experienceDetails?.map(
                  (details: KeyValuePair, detailsIndex: number) => {
                    return (
                      <li
                        className='p-1 text-section-secondary'
                        key={`${details.id}-${detailsIndex}`}
                      >
                        {details.text}
                      </li>
                    );
                  }
                )}
              </ul>
            </li>
          </ul>
        );
      })}
      <ResumeSection />
      <PortfolioRoadMap />
    </SectionContainer>
  );
};
