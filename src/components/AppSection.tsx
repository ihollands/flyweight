import { ReactNode } from 'react';
import { transitionVisible } from '@/helpers/utils';

import useVisible from '@/hooks/visible';

interface NavItem {
  id: string;
  text: string;
}

interface SectionProps {
  blurb?: string;
  className?: string;
  children?: (isVisible: boolean) => ReactNode;
  navItem: NavItem;
}

const transitionClass = transitionVisible([
  'inline-block mr-3 transition-all duration-1000 ease-out transform-gpu',
  'translate-y-3/4 opacity-0',
  'translate-y-0 opacity-100',
]);

export default function AppSection({ blurb, className, children, navItem }: SectionProps) {
  const { elRef, isVisible } = useVisible({ rootMargin: '-100px' });
  return (
    <div
      ref={elRef}
      className={className}
      id={navItem.id}
    >
      <h2 className="mb-16 w-full">
        {navItem.text.split(' ').map((word, idx) => (
          <span
            className={transitionClass(isVisible)}
            key={idx}
            style={{
              transitionDelay: `${idx * 100}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </h2>

      {blurb && <p className="constrain mb-24">{blurb}</p>}

      {children && children(isVisible)}
    </div>
  );
}
