import HeroNav from '@/components/HeroNav';

export default function AppHero() {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="pad-global absolute bottom-1/4 left-0">
        <p
          className="text-match-break leading-3impo w-3/4 sm:w-80 md:w-96 xl:w-[41.5rem]"
          title="test"
          style={{ lineHeight: 1.02 }}
        >
          Leaner and meaner brand design —<br />
          We cut out the agency overhead and connect companies directly with the best creative
          talent.
        </p>
        <h1 className="-ml-[1.5vw] mb-14 text-[22.9vw] font-medium leading-none 3xl:text-[29rem]">
          Flyweight
        </h1>
        <HeroNav />
      </div>
    </div>
  );
}
