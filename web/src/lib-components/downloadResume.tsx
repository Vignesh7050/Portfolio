import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/assets/images';
import { textConstants } from '@/utils';

export const DownloadResume = () => {
  return (
    <div className='flex items-center flex-col gap-3'>
      <p className='text-md font-bold text-section-secondary'>
        {textConstants.resumeDownloadTitle}
      </p>
      <Link
        className='p-2 px-4 flex border border-dotted rounded-lg border-foreground gap-3 w-fit hover:bg-button-hover '
        target='_blank'
        href={process.env.RESUME_GOOGLE_DOC_LINK || '/'}
      >
        <p className='text-sm font-bold'>{textConstants.downloadResume}</p>
        <Image
          src={IMAGES.downloadIcon}
          alt='download resume'
          priority
          width={15}
          height={15}
        />
      </Link>
    </div>
  );
};
