import Image from 'next/image';
import classNames from 'classnames';

import type { ExtLink } from '@/types/generic';
import type { NavItem } from '@/types/navigation';

interface Props {
  links: ExtLink[];
  children: any;
}

import AppLogo from '@/components/AppLogo';
import AppLink from '@/components/AppLink';

export default function ContactSection({ links, children }: Props) {
  return (
    <div className="pad-global relative">
      {children}
      <p
        className="text-match-break relative z-10"
        style={{ lineHeight: 1.02 }}
      >
        <span className="relative flex flex-col items-start leading-none">
          {links.map(({ href, text }, idx: number) => (
            <AppLink
              href={href}
              key={idx}
            >
              {text}
            </AppLink>
          ))}
        </span>
      </p>

      <div className="absolute right-0 top-0 w-1/3 md:w-1/4 lg:right-[148px] lg:w-1/5">
        <div style={{ paddingBottom: '100%' }}>
          <Image
            src="/images/phone_2.png"
            alt="Phone"
            fill={true}
            quality={40}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <AppLogo className="relative z-10" />
    </div>
  );
}
