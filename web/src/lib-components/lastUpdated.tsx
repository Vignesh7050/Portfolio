import { textConstants } from '@/utils';

/**
 * Currently last updated date is maintained in the FE, in the later stage it will come from BE server
 * based on the last updated record date
 */
export const LastUpdated = () => {
  return (
    <section
      id='lastUpdatedOn'
      className='bg-section-bg p-10 flex justify-center border-t border-header-border'
    >
      <p className='text-sm text-section-secondary'>
        {textConstants.lastUpdatedOn} 07-Oct-2024
      </p>
    </section>
  );
};
