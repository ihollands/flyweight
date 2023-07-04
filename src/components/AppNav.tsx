import { useState, ReactNode } from 'react';
import classNames from 'classnames';

import type { NavItem } from '@/types/navigation';

import AppLink from '@/components/AppLink';

interface Props {
  className?: string;
  navItems: NavItem[];
  children: ({ className, textClass }: { [index: string]: string }) => ReactNode;
}

export default function AppNav({ className, children, navItems }: Props) {
  // TODO: Figure out mobile styling for menu
  const [isShrunk, setIsShrunk] = useState(false);

  return (
    <div onClick={() => setIsShrunk(!isShrunk)}>
      {children({ className: classNames('opacity-0') })}
      <div>
        {children({
          className: classNames('absolute', isShrunk ? 'top-0' : 'top-full -translate-y-full'),
          textClass: classNames(isShrunk ? 'text-2xl' : 'hero-title'),
        })}
        <nav className="pad-global w-full border border-pink-500">
          <ul className={classNames('flex flex-wrap text-lg', className)}>
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <AppLink href={`#${id}`}>{text.join(' ')}</AppLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
