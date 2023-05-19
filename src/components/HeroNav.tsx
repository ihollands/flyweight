import classNames from 'classnames';

import data from '@/data/index';

import { ArrowDownRightIcon } from '@heroicons/react/24/outline';

import AppLink from '@/components/AppLink';

interface Props {
  className?: string;
}

export default function HeroNav({ className }: Props) {
  // TODO: Figure out mobile styling for menu

  return (
    <nav>
      <ul className={classNames('text-l flex gap-20', className)}>
        {data.nav_items.map(({ id, text }) => (
          <li key={id}>
            <AppLink href={`#${id}`}>{text}</AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
