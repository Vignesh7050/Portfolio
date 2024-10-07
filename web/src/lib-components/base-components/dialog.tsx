import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { ButtonWrapper } from '..';
import { textConstants } from '@/utils';

export const Dialog = (props: any) => {
  const {
    isOpen,
    onOpenChange,
    children,
    dialogSize = 'full',
    scrollBehavior = 'inside',
    headerText = '',
    footerContentButtonLeft,
  } = props;
  return (
    <>
      <Modal
        scrollBehavior={scrollBehavior}
        size={dialogSize}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1 border-b border-header-border'>
                {headerText}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter className='border-t border-header-border gap-2 flex items-center'>
                {footerContentButtonLeft}
                <ButtonWrapper onPress={onClose} variant='solid'>
                  {textConstants.close}
                </ButtonWrapper>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
