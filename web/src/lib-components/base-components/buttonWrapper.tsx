import { Button, Link } from '@nextui-org/react';
import { MouseEventHandler } from 'react';

type ButtonWrapperProps = {
  onPress?: ((e: any) => void) | undefined;
  isOutLined?: boolean;
  variant?:
    | 'flat'
    | 'shadow'
    | 'bordered'
    | 'solid'
    | 'light'
    | 'faded'
    | 'ghost'
    | undefined;
  children?: React.ReactNode;
  endContent?: React.ReactNode | string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ButtonWrapper = (props: ButtonWrapperProps) => {
  const {
    onPress,
    onClick,
    variant = 'bordered',
    children,
    endContent,
    href = '',
  } = props;

  const getExtraClassNames = () => {
    if (variant === 'bordered') {
      return 'border-1.5 border-dotted border-foreground text-foreground hover:bg-button-hover';
    } else if (variant === 'solid') {
      return 'text-foreground';
    } else {
      return '';
    }
  };

  return (
    <Button
      className={`w-fit text-sm font-semibold rounded-lg ${getExtraClassNames()}`}
      onPress={onPress}
      onClick={onClick}
      variant={variant}
      endContent={endContent}
      size='md'
      {...(href ? { as: Link, href, target: '_blank' } : {})}
    >
      {children}
    </Button>
  );
};
