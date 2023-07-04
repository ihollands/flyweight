import classNames from 'classnames';
import { transitionVisible } from '@/helpers/utils';

import type { NavItem } from '@/types/navigation';

const transitionClass = transitionVisible([
  'inline-block mr-3 transition-all duration-1000 ease-out transform-gpu',
  'translate-y-3/4 opacity-0',
  'translate-y-0 opacity-100',
]);

interface Props {
  navItem: NavItem;
  className?: string;
  isVisible: boolean;
}

export default function AppSectionHeader({ className, isVisible, navItem }: Props) {
  return (
    <h2 className={classNames('mb-8 w-full lg:mb-20', className)}>
      {navItem.text.map((wordGroup: string, idx0: number) => (
        <div key={idx0}>
          {wordGroup.split(' ').map((word: string, idx1: number) => (
            <span
              className={transitionClass(isVisible)}
              key={idx1}
              style={{
                transitionDelay: `${(idx0 + idx1) * 100}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </h2>
  );
}
