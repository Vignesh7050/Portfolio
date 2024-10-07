import { externalLinks } from '@/utils';

export const ResumeIFrame = () => {
  return (
    <iframe
      width='100%'
      height='1070'
      loading='lazy'
      src={externalLinks.resumeView}
    />
  );
};
