import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';

export const Dialog = (props: any) => {
  const {
    isOpen,
    onOpenChange,
    children,
    dialogSize = 'full',
    scrollBehavior = 'inside',
    headerText = '',
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
              <ModalHeader className='flex flex-col gap-1'>
                {headerText}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button
                  size='sm'
                  className='text-foreground font-semibold'
                  variant='shadow'
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
