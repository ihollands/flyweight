import classNames from 'classnames';
import { transitionVisible } from '@/helpers/utils';

import type { ISection } from '@/types/section';

import useVisible from '@/hooks/visible';

const transitionClass = transitionVisible([
  'inline-block mr-3 transition-all duration-1000 ease-out transform-gpu',
  'translate-y-3/4 opacity-0',
  'translate-y-0 opacity-100',
]);

export default function AppSection({ headerClass, wrapperClass, children, navItem }: ISection) {
  const { elRef, isVisible } = useVisible({ rootMargin: '-100px' });
  return (
    <div
      ref={elRef}
      className={wrapperClass}
      id={navItem?.id}
    >
      <h2 className={classNames('mb-8 w-full lg:mb-20', headerClass)}>
        {navItem?.text.map((wordGroup: string, idx0: number) => (
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

      {children && children(isVisible)}
    </div>
  );
}
