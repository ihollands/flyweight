import { ReactNode } from 'react';
import classNames from 'classnames';

import useVisible from '@/hooks/visible';

interface NavItem {
  id: string;
  text: string;
}

interface SectionProps {
  blurb?: string;
  className?: string;
  children?: ReactNode;
  navItem: NavItem;
}

const spanClass = {
  default: 'inline-block mr-3 transition-all duration-500 ease-out transform-gpu',
  hidden: 'translate-y-1/2 opacity-25',
  visible: 'translate-y-0 opacity-100',
};

export default function AppSection({ blurb, className, children, navItem }: SectionProps) {
  const { elRef, isVisible } = useVisible();
  return (
    <div
      ref={elRef}
      className={className}
      id={navItem.id}
    >
      <h2 className="w-full">
        {navItem.text.split(' ').map((word, idx) => (
          <span
            className={classNames(
              spanClass.default,
              isVisible ? spanClass.visible : spanClass.hidden
            )}
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

      {children}
    </div>
  );
}
