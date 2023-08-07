import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import type { NavItem } from '@/types/navigation';

import useActiveLink from '@/hooks/activeLink';

import AppLogo from '@/components/AppLogo';
import AppNav from '@/components/AppNav';

interface Props {
  blurb: string;
  navItems: NavItem[];
}

const Title = ({ isActive }: { isActive?: boolean }) => {
  const isActiveRoute = useActiveLink('/');

  return (
    <Link
      href="/"
      className={classNames(
        isActiveRoute.current
          ? 'pointer-events-none'
          : classNames(
              'pointer-events-auto fill-black transition-all duration-500',
              !isActive && 'hover:fill-accent-blue'
            )
      )}
    >
      <AppLogo />
    </Link>
  );
};

export default function AppHero({ blurb, navItems }: Props) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elRef.current) {
        return;
      }

      const { top } = elRef.current.getBoundingClientRect();

      setIsActive(top > 0);
    };
    document.body.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => document.body.removeEventListener('scroll', handleScroll);
  }, [elRef]);

  return (
    <div className="relative xl:min-h-[80vh]">
      <div className="pad-global mt-20">
        <div className="flex">
          <p
            className="text-match-break w-full"
            style={{ lineHeight: 1.02 }}
            dangerouslySetInnerHTML={{ __html: blurb }}
          />

          <div className="absolute right-0 w-[30%] md:right-[6.75rem] lg:right-[8.75rem] 2xl:right-[9.25rem] 2xl:w-[500px]">
            <div
              className="border border-orange-500"
              style={{ paddingBottom: '114.4%' }}
            >
              <Image
                src={'/images/boxer_2.png'}
                alt="Boxer"
                fill
                sizes="30vw"
                quality={40}
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <div className="z-initial relative mt-[12vw] 2xl:mt-72">
          <div
            className={classNames(
              'z-10 transition-all duration-500',
              isActive ? 'absolute w-full' : 'fixed left-2 top-5 w-20 xl:w-32 2xl:left-4'
            )}
          >
            <div
              className={classNames(
                'w-full transition-all duration-500',
                isActive ? 'w-full' : 'w-20 lg:w-32'
              )}
            >
              <Title isActive={isActive} />
            </div>
            {pathname === '/' && (
              <AppNav
                className={classNames(
                  'absolute bottom-0 left-0 hidden transform-gpu xl:block',
                  isActive
                    ? 'translate-y-10'
                    : 'bottom-auto top-1/2 -translate-y-1/2 translate-x-24 xl:translate-x-40'
                )}
                navItems={navItems}
                isActive={isActive}
              />
            )}
          </div>

          <div
            ref={elRef}
            className="pointer-events-none opacity-0"
          >
            <Title />
          </div>
        </div>
      </div>
    </div>
  );
}
