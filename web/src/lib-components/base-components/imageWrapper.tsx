import Image from 'next/image';

type ImageWrapperProps = {
  src: string | any;
  alt: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
};

export const ImageWrapper = (props: ImageWrapperProps) => {
  const { src, alt, width, height } = props;
  return <Image src={src} alt={alt} width={width} height={height} priority />;
};
