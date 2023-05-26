import { Inter } from 'next/font/google';
import Head from 'next/head';

import data from '@/data/index';

import AppLink from '@/components/AppLink';
import AppHero from '@/components/AppHero';
import AppSection from '@/components/AppSection';
import AppRowGroup from '@/components/AppRowGroup';
import AppColGroup from '@/components/AppColGroup';
import AppNumGroup from '@/components/AppNumGroup';

const inter = Inter({ subsets: ['latin'] });

//TODO need actual urls for end AppHero links

export default function Home() {
  return (
    <div className="space-y-40">
      <Head>
        <title>Flyweight: Brand Design</title>
      </Head>

      <AppHero
        nav={true}
        classes={{
          outer: 'xl:min-h-[80vh]',
          inner: 'mt-40 xl:mt-[20vw]',
        }}
        image={{
          src: '/images/boxer_1.jpg',
          alt: 'Boxer',
          width: 386,
          height: 503,
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: data.header_hero.blurb }} />
      </AppHero>

      <main>
        <div className="pad-global space-y-[10vw] xl:space-y-40">
          <AppSection navItem={data.nav_items[0]}>
            {(Title, titleProps) => (
              <div className="xl:flex">
                <Title
                  {...titleProps}
                  className="w-full"
                />
                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: data.section_1.body }}
                />
              </div>
            )}
          </AppSection>

          <AppSection navItem={data.nav_items[1]}>
            {(Title, titleProps) => (
              <div>
                <Title
                  {...titleProps}
                  className="w-full"
                />
                <div>
                  <AppRowGroup rows={data.section_2.rows} />
                </div>
              </div>
            )}
          </AppSection>

          <AppSection
            className="constrain mx-auto border-2 border-black px-16 py-12"
            navItem={data.nav_items[2]}
          >
            {(Title, titleProps) => (
              <div>
                <Title
                  {...titleProps}
                  className="w-full"
                />
                <div>
                  <AppColGroup cols={data.section_3.cols} />
                </div>
              </div>
            )}
          </AppSection>

          <AppSection navItem={data.nav_items[3]}>
            {(Title, titleProps) => (
              <div>
                <Title
                  {...titleProps}
                  blurb={data.section_4.blurb}
                  className="w-full"
                />
                <div>
                  <AppNumGroup items={data.section_4.items} />
                </div>
              </div>
            )}
          </AppSection>

          <AppSection navItem={data.nav_items[4]}>
            {(Title, titleProps) => (
              <div>
                <Title {...titleProps} />
              </div>
            )}
          </AppSection>
        </div>
      </main>

      <AppSection navItem={data.nav_items[5]}>
        {() => (
          <AppHero>
            <span className="flex flex-col items-start">
              <AppLink href="mailto:placeholder@flyweight.com">Email</AppLink>
              <AppLink href="https://www.instagram.com/explore/tags/flyweight/">Instagram</AppLink>
              <AppLink href="https://www.linkedin.com">LinkedIn</AppLink>
            </span>
          </AppHero>
        )}
      </AppSection>
    </div>
  );
}
