import { Tooltip } from '@nextui-org/react';
import React from 'react';

type TooltipWrapperProps = {
  children: React.ReactNode;
  isDisabled?: boolean;
  content?: React.ReactNode;
};

export const TooltipWrapper = (props: TooltipWrapperProps) => {
  const { children, isDisabled = false, content } = props;
  return (
    <Tooltip
      isDisabled={isDisabled}
      content={content}
      className='bg-foreground text-background'
    >
      {children}
    </Tooltip>
  );
};
