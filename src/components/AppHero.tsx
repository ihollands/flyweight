import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

import type { NavItem } from '@/types/navigation';

import useActiveLink from '@/hooks/activeLink';
import useIntersection from '@/hooks/intersection';

import AppLogo from '@/components/AppLogo';
import AppNav from '@/components/AppNav';

interface Props {
  blurb: string;
  navItems: NavItem[];
}

const Title = () => {
  const isActiveRoute = useActiveLink('/');

  return (
    <Link
      href="/"
      className={classNames(
        isActiveRoute.current
          ? 'pointer-events-none'
          : 'pointer-events-auto fill-black transition-all duration-500 hover:fill-accent-blue'
      )}
    >
      <AppLogo />
    </Link>
  );
};

export default function AppHero({ blurb, navItems }: Props) {
  const { elRef, isActive } = useIntersection({ threshold: 0.999 }, (entry, obs, setIsVisible) => {
    setIsVisible(entry.isIntersecting);
  });

  return (
    <div className="relative xl:min-h-[80vh]">
      <div
        className="pad-global"
        style={{ marginTop: 'calc(2vw + 6vh)' }}
      >
        <div
          className="flex"
          style={{ marginBottom: 'calc(18vw - 2vh)' }}
        >
          <p
            className="text-match-break w-full"
            style={{ lineHeight: 1.02 }}
            dangerouslySetInnerHTML={{ __html: blurb }}
          />

          <div className="absolute right-2 w-1/3 md:right-[121px] lg:right-[156px]">
            <div
              style={{ paddingBottom: '114.4%' }}
              className="shadow-lg"
            >
              <Image
                src={'/images/boxer_2.png'}
                alt="Boxer"
                fill
                sizes="33vw"
                quality={40}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <div className="z-initial relative">
          <div
            className={classNames(
              'z-10 transition-all duration-500',
              isActive ? 'absolute w-full' : 'fixed left-2 top-2 w-20 xl:w-32 2xl:left-4'
            )}
          >
            <div
              className={classNames(
                'w-full transition-all duration-500',
                isActive ? 'w-full' : 'w-20 xl:w-32'
              )}
            >
              <Title />
            </div>
            <AppNav
              className={classNames(
                'pointer-events-none absolute bottom-0 left-0 transform-gpu opacity-0 lg:pointer-events-auto lg:opacity-100',
                isActive ? 'translate-y-12' : 'translate-x-40'
              )}
              navItems={navItems}
              isActive={isActive}
            />
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
