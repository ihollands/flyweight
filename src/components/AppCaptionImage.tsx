import Image from 'next/image';

interface SrcImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Caption {
  title: string;
  subtitle: string;
  description: string;
}

interface Props {
  isVisible: boolean;
  image: SrcImage;
  caption: Caption;
}

export default function AppCaptionImage({ image, caption }: Props) {
  return (
    <div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full"
        quality={80}
      />
      <div className="mt-6">
        <h3 className="mb-0">{caption.title}</h3>
        <div className="lg:flex">
          <p className="lg:w-1/3">{caption.subtitle}</p>
          <p className="lg:w-2/3">{caption.description}</p>
        </div>
      </div>
    </div>
  );
}

export type { Props };
