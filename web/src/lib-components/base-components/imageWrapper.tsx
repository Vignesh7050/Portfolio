import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

type ImageWrapperProps = {
  src: string | any;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
};

export const ImageWrapper = (props: ImageWrapperProps): React.ReactNode => {
  const { src, alt, width, height, className, onClick } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className={className}
      onClick={onClick}
    />
  );
};
