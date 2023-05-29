import Image from 'next/image';
import { ReactNode } from 'react';
import classNames from 'classnames';
import HeroNav from '@/components/HeroNav';

interface Props {
  classes?: {
    outer?: string;
    inner?: string;
  };
  image?: {
    [key: string]: any;
    src: string;
    alt: string;
  };
  children: ReactNode;
  nav?: boolean;
}

export default function AppHero({ classes, image, children, nav = false }: Props) {
  return (
    <div className={classNames('relative', classes?.outer)}>
      <div className={classNames('pad-global', classes?.inner)}>
        <p
          className="text-match-break relative z-10 w-3/4 leading-3 sm:w-80 md:w-96 xl:w-[41.5rem]"
          style={{ lineHeight: 1.02 }}
        >
          {children}
        </p>
        <div className="z-initial relative">
          {image && (
            <div className="w-30v absolute bottom-[15vw] right-5 w-[30vw] md:right-[15vw] 2xl:w-auto">
              <Image
                {...image}
                src={image.src}
                alt={image.alt}
              />
            </div>
          )}
          <h1 className="pointer-events-none relative -ml-[1.5vw] mb-14 text-[22.9vw] font-medium leading-none tracking-tight 3xl:text-[29rem]">
            Flyweight
          </h1>
        </div>
        {nav && <HeroNav />}
      </div>
    </div>
  );
}
