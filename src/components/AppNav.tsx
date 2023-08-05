import classNames from 'classnames';

import type { NavItem } from '@/types/navigation';

import AppLink from '@/components/AppLink';

interface Props {
  className?: string;
  navItems: NavItem[];
  isActive: boolean;
}

export default function AppNav({ className, navItems }: Props) {
  const handleClick = (e: Event, id: string) => {
    e.preventDefault();

    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={classNames('w-full', className)}>
      <ul className={classNames('flex w-10/12 justify-between gap-8 whitespace-nowrap')}>
        {navItems.map(({ id, text }) => {
          const anchorId = `#${id}`;

          return (
            <li key={id}>
              <AppLink
                href={anchorId}
                onClick={(e: Event) => handleClick(e, anchorId)}
              >
                {text}
              </AppLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
