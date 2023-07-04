import { Inter } from 'next/font/google';
import Head from 'next/head';

import pageData from '@/data/index';

import AppSectionHeader from '@/components/AppSectionHeader';
import AppSection from '@/components/AppSection';
import DefaultPage from '@/components/DefaultPage';
import AppCaptionImage, { type Props as AppCaptionImageProps } from '@/components/AppCaptionImage';
import AppRowGroup, { type Props as AppRowGroupProps } from '@/components/AppRowGroup';
import AppColGroup, { type Props as AppColGroupProps } from '@/components/AppColGroup';
import AppNumGroup, { type Props as AppNumGroupProps } from '@/components/AppNumGroup';
import AppPBlock, { type Props as AppPBlockProps } from '@/components/AppPBlock';

const inter = Inter({ subsets: ['latin'] });

const { sections = [] } = pageData;
const navItems = sections.map(({ navItem }) => navItem);

export default function Home() {
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
            />
          </>
        )}
      </AppSection>

      <AppSection
        navItem={sections[2].navItem}
        className="constrain mx-auto border-2 border-black p-5 lg:p-16"
      >
        {(isVisible, navItem) => (
          <>
            <AppSectionHeader
              navItem={navItem}
              isVisible={isVisible}
            />
            <AppColGroup
              isVisible={isVisible}
              cols={sections[2].cols as AppColGroupProps['cols']}
            />
          </>
        )}
      </AppSection>

      <AppSection navItem={sections[3].navItem}>
        {(isVisible, navItem) => (
          <>
            <AppSectionHeader
              navItem={navItem}
              isVisible={isVisible}
            />
            <AppNumGroup
              isVisible={isVisible}
              items={sections[3].items as AppNumGroupProps['items']}
            />
          </>
        )}
      </AppSection>

      <AppSection navItem={sections[4].navItem}>
        {(isVisible, navItem) => (
          <>
            <AppSectionHeader
              navItem={navItem}
              isVisible={isVisible}
            />
            <AppCaptionImage
              isVisible={isVisible}
              image={sections[4].image as AppCaptionImageProps['image']}
              caption={sections[4].caption as AppCaptionImageProps['caption']}
            />
          </>
        )}
      </AppSection>
    </DefaultPage>
  );
}
