import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import type { NavItem } from '@/types/navigation';

import defaultData from '@/data/default';

import { useRouter } from 'next/router';

import AppHero from '@/components/AppHero';
import AppLink from '@/components/AppLink';
import AppSection from '@/components/AppSection';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  navItems: NavItem[];
  children: ReactNode;
}

export default function DefaultPage({ navItems, children }: Props) {
  const { route } = useRouter();

  const buttonLinkHref = route.includes('creative') ? '/' : '/creative';

  return (
    <>
      <div className="relative space-y-20 lg:space-y-32 xl:space-y-40">
        <AppHero
          classes={{
            outer: 'xl:min-h-[80vh]',
            inner: 'mt-40 md:mt-72 xl:mt-[20vw]',
          }}
          image={{
            src: '/images/boxer_1.jpg',
            alt: 'Boxer',
            width: 386,
            height: 503,
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: defaultData.header_hero.blurb }} />
        </AppHero>

        <main>
          <div className="pad-global space-y-28 xl:space-y-40">{children}</div>
        </main>

        <AppSection
          headerClass="pad-global"
          navItem={{ id: 'contact_us', text: ['Contact Us'] }}
        >
          {() => (
            <AppHero
              image={{
                src: '/images/phone_1.jpg',
                alt: 'Phone',
                width: 324,
                height: 324,
              }}
            >
              <span className="flex flex-col items-start">
                <AppLink href="mailto:peter@flyweight.xyz">Email</AppLink>
                <AppLink href="https://www.instagram.com/explore/tags/flyweight/">
                  Instagram
                </AppLink>
                <AppLink href="https://www.linkedin.com">LinkedIn</AppLink>
              </span>
            </AppHero>
          )}
        </AppSection>
      </div>

      <div className="fixed -right-6 top-2 flex scale-75 gap-2 lg:right-2 lg:scale-100">
        <button className="btn-dark">I Need Design</button>
        <Link
          href={buttonLinkHref}
          className="btn-light"
        >
          I&apos;m a Creative
        </Link>
      </div>
    </>
  );
}
