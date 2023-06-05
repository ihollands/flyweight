import Image from 'next/image';
import { ReactNode } from 'react';
import classNames from 'classnames';
import AppNav from '@/components/AppNav';

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
  const Title = ({ className, textClass }: { className?: string; textClass?: string }) => (
    <h1
      className={classNames(
        'pointer-events-none -ml-[1.5vw] mb-14 origin-top-left font-medium leading-none tracking-tight transition-all duration-500',
        className,
        textClass ? textClass : 'hero-title'
      )}
    >
      Flyweight
    </h1>
  );

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
          {nav ? (
            <AppNav>
              {({ className, textClass }) => (
                <Title
                  className={className}
                  textClass={textClass}
                />
              )}
            </AppNav>
          ) : (
            <div className="pointer-events-none relative">
              <Title />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
