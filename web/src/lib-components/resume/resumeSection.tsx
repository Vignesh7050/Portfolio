import { textConstants } from '@/utils';
import { ViewResume } from './viewResume';
import { DownloadResume } from './downloadResume';

export const ResumeSection = () => {
  return (
    <div className='flex items-center flex-col gap-3 justify-center'>
      <p className='text-md font-bold text-section-secondary'>
        {textConstants.resumeDownloadTitle}
      </p>
      <div className='flex gap-2'>
        <ViewResume />
        <DownloadResume />
      </div>
    </div>
  );
};
