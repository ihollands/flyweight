import { ReactNode } from 'react';
import classNames from 'classnames';
import { transitionVisible } from '@/helpers/utils';

import useVisible from '@/hooks/visible';

interface NavItem {
  id: string;
  text: string;
}

interface SectionProps {
  headerClass?: string;
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

export default function AppSection({
  blurb,
  headerClass,
  className,
  children,
  navItem,
}: SectionProps) {
  const { elRef, isVisible } = useVisible({ rootMargin: '-100px' });
  return (
    <div
      ref={elRef}
      className={className}
      id={navItem.id}
    >
      <h2 className={classNames('mb-8 w-full lg:mb-16', headerClass)}>
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
