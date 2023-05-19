import { ReactNode } from 'react';
import HeroNav from '@/components/HeroNav';

interface Props {
  children: ReactNode;
  nav?: boolean;
}

export default function AppHero({ children, nav = false }: Props) {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="pad-global absolute bottom-1/4 left-0">
        <p
          className="text-match-break leading-3impo w-3/4 sm:w-80 md:w-96 xl:w-[41.5rem]"
          style={{ lineHeight: 1.02 }}
        >
          {children}
        </p>
        <h1 className="-ml-[1.5vw] mb-14 text-[22.9vw] font-medium leading-none 3xl:text-[29rem]">
          Flyweight
        </h1>
        {nav && <HeroNav />}
      </div>
    </div>
  );
}
