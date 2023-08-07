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

  const contactNavItem = { id: 'contact_us', text: ['Contact Us'] };

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
      <div className="relative space-y-20 before:fixed before:inset-x-0 before:top-0 before:z-10 before:h-[4.75rem] before:bg-white lg:space-y-32 xl:space-y-40">
        <AppHero
          blurb={defaultData.hero.blurb}
          navItems={[...navItems, contactNavItem]}
        />

        <main>
          <div className="pad-global mb-28 space-y-28 xl:mb-40 xl:space-y-40">{children}</div>
        </main>

        <AppSection navItem={contactNavItem}>
          {(isVisible, navItem) => (
            <>
              <ContactSection links={defaultData.contact.links}>
                <AppSectionHeader
                  navItem={navItem}
                  isVisible={isVisible}
                />
              </ContactSection>
            </>
          )}
        </AppSection>
      </div>

      <div className="fixed right-2 top-2 z-10 flex gap-2 2xl:right-4">
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
      </div>

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
