import { useState, useEffect, type ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

import type { NavItem } from '@/types/navigation';

import defaultData from '@/data/default';

import AppHero from '@/components/AppHero';
import AppSection from '@/components/AppSection';
import AppSectionHeader from '@/components/AppSectionHeader';
import AppModal from '@/components/AppModal';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  navItems: NavItem[];
  children: ReactNode;
}

export default function DefaultPage({ navItems, children }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 1000);
  }, []);

  return (
    <Transition
      appear={true}
      show={isMounted}
      className="relative"
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="relative space-y-20 lg:space-y-32 xl:space-y-40">
        <AppHero blurb={defaultData.hero.blurb} />

        <main>
          <div className="pad-global space-y-28 xl:space-y-40">{children}</div>
        </main>

        <AppSection navItem={{ id: 'contact_us', text: ['Contact Us'] }}>
          {(isVisible, navItem) => (
            <>
              <AppSectionHeader
                className="pad-global"
                navItem={navItem}
                isVisible={isVisible}
              />

              <ContactSection links={defaultData.contact.links} />
            </>
          )}
        </AppSection>
      </div>

      <Transition.Child
        className="fixed right-2 top-2 z-10 flex gap-2"
        enter="transition-opacity delay-1000 duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        entered="opacity-100"
      >
        <button
          type="button"
          className="btn-dark"
          onClick={() => setShowContactModal(true)}
        >
          I Need Design
        </button>
        <Link
          href="/creative#designers"
          className="btn-light"
        >
          I&apos;m a Creative
        </Link>
      </Transition.Child>

      <AppModal
        show={showContactModal}
        id="contact-form"
        setShow={setShowContactModal}
      >
        <ContactForm />
      </AppModal>
    </Transition>
  );
}
