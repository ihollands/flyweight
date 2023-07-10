import { useState, type ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import type { NavItem } from '@/types/navigation';

import defaultData from '@/data/default';

import { useRouter } from 'next/router';

import AppHero from '@/components/AppHero';
import AppLink from '@/components/AppLink';
import AppSection from '@/components/AppSection';
import AppSectionHeader from '@/components/AppSectionHeader';
import AppModal from '@/components/AppModal';
import ContactForm from '@/components/ContactForm';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  navItems: NavItem[];
  children: ReactNode;
}

export default function DefaultPage({ navItems, children }: Props) {
  const { route } = useRouter();

  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <div className="relative space-y-20 lg:space-y-32 xl:space-y-40">
        <AppHero
          classes={{
            outer: 'xl:min-h-[80vh]',
            inner: 'mt-40 md:mt-72 xl:mt-[20vw]',
            image: 'w-1/3',
          }}
          image={{
            src: '/images/boxer_1.jpg',
            alt: 'Boxer',
            fill: true,
          }}
          aspectRatio="114.4%"
        >
          <span
            dangerouslySetInnerHTML={{ __html: defaultData.header_hero.blurb }}
            className="relative -top-32 w-3/4 sm:w-80 md:w-96 xl:w-[41.5rem]"
          />
        </AppHero>

        <main>
          <div className="pad-global space-y-28 xl:space-y-40">{children}</div>
        </main>

        <AppSection navItem={{ id: 'contact_us', text: ['Contact Us'] }}>
          {(isVisible, navItem) => (
            <>
              <AppSectionHeader
                navItem={navItem}
                isVisible={isVisible}
              />
              <AppHero
                classes={{
                  image: 'w-1/3 md:w-1/4 lg:w-1/5',
                }}
                image={{
                  src: '/images/phone_1.jpg',
                  alt: 'Phone',
                  fill: true,
                }}
                aspectRatio="100%"
              >
                <span className="relative flex flex-col items-start">
                  <AppLink href="mailto:peter@flyweight.xyz">Email</AppLink>
                  <AppLink href="https://www.instagram.com/explore/tags/flyweight/">
                    Instagram
                  </AppLink>
                  <AppLink href="https://www.linkedin.com">LinkedIn</AppLink>
                </span>
              </AppHero>
            </>
          )}
        </AppSection>
      </div>

      <div className="pad-global fixed right-0 top-2 flex gap-2">
        <button
          type="button"
          className="btn-dark"
          onClick={() => setShowContactModal(true)}
        >
          I Need Design
        </button>
        <Link
          href="/creative"
          className="btn-light"
        >
          I&apos;m a creative
        </Link>
      </div>
      {showContactModal && (
        <AppModal id="contact-form">
          <ContactForm />
        </AppModal>
      )}
    </>
  );
}
