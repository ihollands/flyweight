import React, { JSXElementConstructor } from 'react';
import type { ISection } from '@/types/section';

import pageData from '@/data/creative';

import DefaultPage from '@/components/DefaultPage';
import Head from 'next/head';
import AppSection from '@/components/AppSection';
import AppRowGroup from '@/components/AppRowGroup';
import AppPBlock from '@/components/AppPBlock';

const components: {
  [index: string]: JSXElementConstructor<any>;
} = {
  AppPBlock,
  AppRowGroup,
};

export default function Creative() {
  return (
    <DefaultPage navItems={pageData.nav_items}>
      <Head>
        <title>Flyweight: For Creatives</title>
      </Head>

      {pageData.sections.map(({ component, headerClass, wrapperClass }: ISection, idx: number) => (
        <AppSection
          key={idx}
          navItem={pageData.nav_items[idx]}
          headerClass={headerClass}
          wrapperClass={wrapperClass}
        >
          {(isVisible: boolean) => {
            const { name = '', ...props } = component || {};
            const Component = components[name];

            return (
              <Component
                {...props}
                isVisible={isVisible}
              />
            );
          }}
        </AppSection>
      ))}
    </DefaultPage>
  );
}
