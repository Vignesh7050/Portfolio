import { Link } from '@nextui-org/react';

import { KeyValuePair, profileContent, textConstants } from '@/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Snippet,
} from '@nextui-org/react';
import { SectionContainer } from './sectionContainer';
import { ImageWrapper } from './base-components/imageWrapper';

export const Contact = () => {
  return (
    <SectionContainer id='contact' headerName={textConstants.contact}>
      <div className='flex justify-center items-center gap-20'>
        {profileContent.contactDetails.map(
          (contacts: KeyValuePair, index: number) => {
            return (
              !contacts.isHidden && (
                <>
                  {contacts.additionalInfo ? (
                    <Popover>
                      <PopoverTrigger>
                        <ImageWrapper
                          src={contacts.icon2 || contacts.icon}
                          alt='profile image'
                          width={60}
                          height={60}
                          className='cursor-pointer'
                        />
                      </PopoverTrigger>
                      <PopoverContent className='flex flex-col gap-2 p-2'>
                        {contacts.additionalInfo && (
                          <Snippet hideSymbol>
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
                  ) : (
                    <Link
                      href={contacts.contactUrl}
                      target='_blank'
                      key={`${contacts.id}-${index}`}
                      color='foreground'
                      size='sm'
                    >
                      <ImageWrapper
                        src={contacts.icon2 || contacts.icon}
                        alt='profile image'
                        width={60}
                        height={60}
                        className='cursor-pointer'
                      />
                    </Link>
                  )}
                </>
              )
            );
          }
        )}
      </div>
    </SectionContainer>
  );
};
