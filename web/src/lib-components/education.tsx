import { educationDetails, KeyValuePair, textConstants } from '@/utils';
import { SectionContainer } from './sectionContainer';
import { EntityHeader } from './entityHeading';
import { EntityDisplayStartEndDate } from './entityDisplayStartEndDate';

export const Education = () => {
  return (
    <SectionContainer id='education' headerName={textConstants.education}>
      {educationDetails.map((education: KeyValuePair, index: number) => {
        return (
          <div
            className='flex justify-center flex-col items-center'
            key={`${education.id}-${index}`}
          >
            <ul>
              <li>
                <EntityHeader entityHeader={education.instituteName} />
                <EntityDisplayStartEndDate
                  startDate={education.joiningDate}
                  endDate={education.endingDate || textConstants.present}
                  className='text-center'
                />
              </li>
            </ul>
            <p className='text-md text-center'>{education.course}</p>
          </div>
        );
      })}
    </SectionContainer>
  );
};
