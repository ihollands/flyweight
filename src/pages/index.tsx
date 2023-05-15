import { Inter } from 'next/font/google';
import { navItems } from '@/helpers/static';

import Head from '@/components/Head';
import AppHero from '@/components/AppHero';
import AppSection from '@/components/AppSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head title="Brand Design" />

      <AppHero />

      <div className="pad-global space-y-[10vw] xl:space-y-40">
        <AppSection navItem={navItems[0]}>
          {(Title, titleProps) => (
            <div className="xl:flex">
              <Title
                {...titleProps}
                className="w-full"
              />
              <div className="w-full">
                <p>
                  A top tier agency typically charges $100-150K for a modest brand design project.
                  These costs subsidize the fancy “studio” space, the modern art that adorns the
                  walls, and the supposed senior team “dedicated” to your business. However, if you
                  look beneath the veneer of the wine-dine-and-design approach, the reality becomes
                  clear. Clients are constantly juggled, projects are divyed up, and deliverables
                  are passed off to freelancers. Ultimately the quality of work is contingent on
                  individual talent, not the name on front door.
                </p>

                <p>
                  That’s why we believe the best brand design doesn’t need to cost an arm and a leg.
                  Because it doesn’t take an agency, an army, or a committee. Just one great
                  designer.
                </p>
              </div>
            </div>
          )}
        </AppSection>
      </div>
    </div>
  );
}
