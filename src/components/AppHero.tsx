import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import classNames from 'classnames';
import AppNav from '@/components/AppNav';

import type { NavItem } from '@/types/navigation';
import useActiveLink from '@/hooks/activeLink';

interface Props {
  classes?: {
    outer?: string;
    inner?: string;
    image?: string;
  };
  image?: {
    [key: string]: any;
    src: string;
    alt: string;
  };
  aspectRatio: string;
  children: ReactNode;
  navItems?: NavItem[];
}

const Title = ({ className, textClass }: { className?: string; textClass?: string }) => {
  const isActive = useActiveLink('/');

  return (
    <Link href="/">
      <h1
        className={classNames(
          'pointer-events-none -ml-[1.5vw] mb-14 origin-top-left font-medium leading-none tracking-tight transition-all duration-500 hover:text-accent-blue',
          className,
          textClass ? textClass : 'hero-title',
          isActive.current ? 'pointer-events-none' : 'pointer-events-auto'
        )}
      >
        Flyweight
      </h1>
    </Link>
  );
};

export default function AppHero({ classes, image, children, aspectRatio, navItems = [] }: Props) {
  return (
    <div className={classNames('relative', classes?.outer)}>
      <div className={classNames('pad-global', classes?.inner)}>
        <p
          className="text-match-break relative z-10 leading-3"
          style={{ lineHeight: 1.02 }}
        >
          {children}
        </p>

        <div className="z-initial relative">
          {image && (
            <div
              className={classNames(
                'absolute right-0 top-0 -translate-y-[60%] lg:right-[145px]',
                classes?.image
              )}
            >
              <div
                style={{ paddingBottom: aspectRatio }}
                className="shadow-lg"
              >
                <Image
                  {...image}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          )}
          {navItems?.length ? (
            // <AppNav>
            //   {({ className, textClass }) => (
            //     <Title
            //       className={className}
            //       textClass={textClass}
            //     />
            //   )}
            // </AppNav>
            <div></div>
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
