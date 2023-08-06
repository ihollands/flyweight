import { useState } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import pageData from '@/data/creative';

import AppSectionHeader from '@/components/AppSectionHeader';
import AppSection from '@/components/AppSection';
import DefaultPage from '@/components/DefaultPage';
import AppRowGroup, { type Props as AppRowGroupProps } from '@/components/AppRowGroup';
import AppPBlock, { type Props as AppPBlockProps } from '@/components/AppPBlock';
import AppModal from '@/components/AppModal';
import CreativeContactForm from '@/components/CreativeContactForm';

const inter = Inter({ subsets: ['latin'] });

const { sections = [] } = pageData;
const navItems = sections.map(({ navItem }) => navItem);

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <DefaultPage navItems={navItems}>
      <Head>
        <title>Flyweight: Brand Design</title>
      </Head>

      <AppSection
        navItem={sections[0].navItem}
        className="xl:flex"
      >
        {(isVisible, navItem) => (
          <>
            <AppSectionHeader
              navItem={navItem}
              isVisible={isVisible}
            />
            <AppPBlock
              isVisible={isVisible}
              items={sections[0].items as AppPBlockProps['items']}
            />
          </>
        )}
      </AppSection>

      <AppSection navItem={sections[1].navItem}>
        {(isVisible, navItem) => (
          <>
            <AppSectionHeader
              navItem={navItem}
              isVisible={isVisible}
            />
            <AppRowGroup
              isVisible={isVisible}
              rows={sections[1].rows as AppRowGroupProps['rows']}
            >
              <button
                className="btn-dark mt-4"
                onClick={() => setShowModal(true)}
              >
                Join the Club
              </button>
            </AppRowGroup>
            <AppModal
              show={showModal}
              id="creative-contact-form"
              setShow={setShowModal}
            >
              <CreativeContactForm />
            </AppModal>
          </>
        )}
      </AppSection>
    </DefaultPage>
  );
}
