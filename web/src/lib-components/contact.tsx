import { KeyValuePair, profileContent } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section
      id='contacts'
      className='bg-contacts-bg w-full h-max p-6 py-12 flex flex-col justify-center items-center gap-6 border-t border-header-border'
    >
      <h3 className='font-bold text-xl text-header-color'>Contacts</h3>
      <div className='flex items-center justify-center gap-6'>
        {profileContent.contactDetails.map(
          (contacts: KeyValuePair, index: number) => {
            return (
              !contacts.isHidden && (
                <Link
                  href={contacts.contactUrl}
                  target='_blank'
                  key={`${contacts.id}-${index}`}
                >
                  <Image
                    src={contacts.icon2 || contacts.icon}
                    alt='profile image'
                    priority
                    width={25}
                    height={25}
                  />
                </Link>
              )
            );
          }
        )}
      </div>
    </section>
  );
};
