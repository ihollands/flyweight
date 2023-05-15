import classNames from 'classnames';

import { navItems } from '@/helpers/static';

import Link from 'next/link';

import { ArrowDownRightIcon } from '@heroicons/react/24/outline';

interface Props {
  className?: string;
}

export default function HeroNav({ className }: Props) {
  // TODO: Figure out mobile styling for menu

  return (
    <nav>
      <ul className={classNames('text-l flex gap-20', className)}>
        {navItems.map(({ id, text }) => (
          <li key={id}>
            <Link
              className="group flex items-center gap-0.5"
              href={`#${id}`}
            >
              <>
                {text}
                <ArrowDownRightIcon className="relative -bottom-px h-3.5 -translate-x-full -translate-y-full transform-gpu stroke-[3px] opacity-0 transition-all group-hover:transform-none group-hover:opacity-100" />
              </>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
