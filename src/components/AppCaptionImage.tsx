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
      <Image {...image} />
      <div className="mt-6 grid-cols-8 gap-2 lg:grid">
        <h3 className="lg:col-span-2">{caption.title}</h3>
        <p className="mb-4 text-base lg:col-span-2 xl:col-span-2">{caption.subtitle}</p>
        <p className="pr-4 text-base lg:col-span-8 xl:col-span-4">{caption.description}</p>
      </div>
    </div>
  );
}

export type { Props };
