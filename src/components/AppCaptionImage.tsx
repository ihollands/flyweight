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
        {...image}
        className="w-full"
        quality={80}
      />
      <div className="mt-6 grid-cols-8 gap-2 lg:grid">
        <h3 className="lg:col-span-3 xl:col-span-2">{caption.title}</h3>
        <p className="relative -top-3 text-base lg:top-3 lg:col-span-4 lg:text-center xl:col-span-2">
          {caption.subtitle}
        </p>
        <p className="pr-4 text-base lg:col-span-8 xl:col-span-4">{caption.description}</p>
      </div>
    </div>
  );
}

export type { Props };
