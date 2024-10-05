import Link from 'next/link';
import Image from 'next/image';
import { IMAGES } from '@/assets/images';

export const WorkExperience = () => {
  return (
    <section
      id='experience'
      className='bg-experience-bg w-full h-max flex p-6 py-12 border-t border-header-border'
    >
      <div style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
        <h3 className='font-bold text-xl text-header-color'>Work Experience</h3>

        <ul style={{ paddingLeft: '20px' }}>
          <li style={{ listStyle: 'none' }}>
            <h4>SpurTree Technologies Pvt Ltd | August 2021 - Present</h4>
            <ul className='list-disc p-4 px-6'>
              <li>
                Developed and maintained scalable web applications using
                React.js and Node.js.
              </li>
              <li>
                Collaborated closely with cross-functional teams in an Agile
                environment to deliver high-quality software on time.
              </li>
              <li>
                Utilized custom React hooks for clean code architecture,
                ensuring separation of concerns and adhering to DRY principles.
              </li>
              <li>
                Implemented modern state management solutions like Redux for
                seamless front-end application architecture.
              </li>
            </ul>
          </li>
          <div className='flex items-center flex-col gap-3 sm:items-start sm:flex-col pt-10'>
            <p className='text-sm'>Check out my latest resume here</p>
            <Link
              className='p-2 px-4 flex border border-dotted rounded-lg border-foreground gap-3 w-fit hover:bg-button-hover'
              target='_blank'
              href={process.env.RESUME_GOOGLE_DOC_LINK || '/'}
            >
              <p className='text-sm'>Resume Download</p>
              <Image
                src={IMAGES.downloadIcon}
                alt='download resume'
                priority
                width={15}
                height={15}
              />
            </Link>
          </div>
        </ul>
      </div>
    </section>
  );
};
