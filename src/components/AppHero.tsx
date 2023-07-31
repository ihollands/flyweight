import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

import type { NavItem } from '@/types/navigation';
import useActiveLink from '@/hooks/activeLink';

import AppLogo from '@/components/AppLogo';

interface Props {
  blurb: string;
  navItems?: NavItem[];
}

const Title = ({ className, textClass }: { className?: string; textClass?: string }) => {
  const isActive = useActiveLink('/');

  return (
    <Link href="/">
      <div
        className={classNames(
          'mb-14 origin-top-left',
          className,
          textClass ? textClass : 'hero-title',
          isActive.current
            ? 'pointer-events-none'
            : 'pointer-events-auto fill-black transition-all duration-500 hover:fill-accent-blue'
        )}
      >
        <AppLogo />
      </div>
    </Link>
  );
};

export default function AppHero({ blurb, navItems = [] }: Props) {
  return (
    <div className="relative xl:min-h-[80vh]">
      <div className="pad-global mt-40 md:mt-72 xl:mt-[20vw]">
        <p
          className="text-match-break relative -top-32 z-10 w-3/4 sm:top-10 sm:w-80 md:top-8 md:w-96 lg:top-0 xl:w-[41.5rem]"
          style={{ lineHeight: 1.02 }}
          dangerouslySetInnerHTML={{ __html: blurb }}
        />

        <div className="z-initial relative">
          <div className="absolute right-0 top-0 w-1/3 -translate-y-[60%] lg:right-[148px]">
            <div
              style={{ paddingBottom: '114.4%' }}
              className="shadow-lg"
            >
              <Image
                src={'/images/boxer_1.jpg'}
                alt={'Boxer'}
                fill={true}
                quality={20}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
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
