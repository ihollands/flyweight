import React, { JSXElementConstructor } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import { wrapperClasses } from '@/helpers/classes';

import type { ISection } from '@/types/section';

import pageData from '@/data/index';

import AppCaptionImage from '@/components/AppCaptionImage';
import AppSection from '@/components/AppSection';
import AppRowGroup from '@/components/AppRowGroup';
import AppColGroup from '@/components/AppColGroup';
import AppNumGroup from '@/components/AppNumGroup';
import AppPBlock from '@/components/AppPBlock';
import DefaultPage from '@/components/DefaultPage';

const inter = Inter({ subsets: ['latin'] });

const components: {
  [index: string]: JSXElementConstructor<any>;
} = {
  AppPBlock,
  AppRowGroup,
  AppNumGroup,
  AppCaptionImage,
  AppColGroup,
};

export default function Home() {
  return (
    <DefaultPage navItems={pageData.nav_items}>
      <Head>
        <title>Flyweight: Brand Design</title>
      </Head>

      {pageData.sections.map(({ component, headerClass }: ISection, idx: number) => {
        const wrapperClass = component?.name && wrapperClasses[component.name];

        return (
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
        );
      })}
    </DefaultPage>
  );
}
