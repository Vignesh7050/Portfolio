import { KeyValuePair, paintingsList, textConstants } from '@/utils';
import { Dialog } from '../base-components/dialog';
import Image from 'next/image';
import { IMAGES } from '@/assets/images';

type HobbiesDialogProps = {
  isOpen: boolean;
  onOpenChange: any;
};

export const HobbiesDialog = (props: HobbiesDialogProps) => {
  const { isOpen, onOpenChange } = props;

  return (
    <>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          headerText={
            <div className='flex gap-2'>
              <p>{textConstants.paintings}</p>
              <Image
                src={IMAGES.paintBushImg}
                alt='profile image'
                priority
                width={25}
                height={25}
              />
            </div>
          }
          dialogSize='md'
          scrollBehavior='outside'
        >
          {paintingsList.map((painting: KeyValuePair, index: number) => {
            return (
              <Image
                className='w-full h-auto rounded-lg'
                src={painting.imageUrl}
                alt='profile image'
                priority
                key={`${painting.id}-${index}`}
              />
            );
          })}
        </Dialog>
      )}
    </>
  );
};
