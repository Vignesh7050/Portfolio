import { KeyValuePair, paintingsList, textConstants } from '@/utils';
import { Dialog } from '../base-components/dialog';
import { IMAGES } from '@/assets/images';
import { ImageWrapper } from '../base-components/imageWrapper';

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
              <ImageWrapper
                src={IMAGES.paintBushImg}
                alt='paint image'
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
              <ImageWrapper
                className='w-full h-auto rounded-lg'
                src={painting.imageUrl}
                alt='paint image'
                key={`${painting.id}-${index}`}
              />
            );
          })}
        </Dialog>
      )}
    </>
  );
};
