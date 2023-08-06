import { useState } from 'react';
import Image from 'next/image';

import AppLink from '@/components/AppLink';
import AppModal from '@/components/AppModal';

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
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: Event) => {
    e.preventDefault();

    setShowModal(true);
  };

  return (
    <div className="relative">
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

      <div className="text-right xl:mt-4">
        <AppLink
          href="#"
          onClick={handleClick}
        >
          See more
        </AppLink>
      </div>
      <AppModal
        show={showModal}
        id="caption-group-modal"
        setShow={setShowModal}
      >
        Many of our projects are yet to go live and therefore cannot be published. To see more of
        our portfolio, please contact us.
      </AppModal>
    </div>
  );
}

export type { Props };
