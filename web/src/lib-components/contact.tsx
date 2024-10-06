import { Link } from '@nextui-org/react';
import Image from 'next/image';

import { KeyValuePair, profileContent, textConstants } from '@/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Snippet,
} from '@nextui-org/react';
import { SectionContainer } from './sectionContainer';

export const Contact = () => {
  return (
    <SectionContainer id='contacts' headerName={textConstants.contacts}>
      <div className='flex justify-center items-center gap-10'>
        {profileContent.contactDetails.map(
          (contacts: KeyValuePair, index: number) => {
            return (
              !contacts.isHidden && (
                <>
                  <Popover>
                    <PopoverTrigger>
                      <Image
                        src={contacts.icon2 || contacts.icon}
                        alt='profile image'
                        priority
                        width={50}
                        height={50}
                        className='cursor-pointer'
                      />
                    </PopoverTrigger>
                    <PopoverContent className='flex flex-col gap-2 p-2'>
                      {contacts.additionalInfo && (
                        <Snippet
                          hideSymbol
                        >
                          {contacts.additionalInfo}
                        </Snippet>
                      )}
                      <Link
                        href={contacts.contactUrl}
                        target='_blank'
                        key={`${contacts.id}-${index}`}
                        color='foreground'
                        showAnchorIcon={true}
                        size='sm'
                      >
                        {contacts.contactUrlDisplayText}
                      </Link>
                    </PopoverContent>
                  </Popover>
                </>
              )
            );
          }
        )}
      </div>
    </SectionContainer>
  );
};
