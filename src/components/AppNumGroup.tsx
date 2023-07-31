import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { transitionVisible, shuffleArray, range } from '@/helpers/utils';

interface Item {
  head: string;
  body: string;
}

interface Props {
  isVisible: boolean;
  items: Item[];
}

const transitionClass = transitionVisible([
  'transition-all duration-1000 ease-out',
  'opacity-0 scale-110',
  'opacity-100 scale-100',
]);

export default function AppNumGroup({ isVisible, items }: Props) {
  const [transitionOrder, setTransitionOrder] = useState(range(0, items.length));

  useEffect(() => {
    setTransitionOrder(shuffleArray(transitionOrder));
    //eslint-disable-next-line
  }, []);

  const displayNum = (idx: number): string => {
    const num = idx + 1;

    return `${num < 10 ? '0' : ''}${num}`;
  };

  return (
    <ul className="grid grid-flow-row grid-flow-row gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-12">
      {items.map(({ head, body }, idx) => (
        <li key={idx}>
          <div
            className={classNames('mb-2 lg:mb-6', transitionClass(isVisible))}
            style={{
              transitionDelay: `${300 + transitionOrder[idx] * 100}ms`,
            }}
          >
            <p className="mb-1 text-4xl font-medium lg:mb-2">{displayNum(idx)}</p>
            <p className="text-2xl lg:text-3xl">{head}</p>
          </div>
          <p
            className={classNames('text-base', transitionClass(isVisible))}
            style={{
              transitionDelay: `${600 + transitionOrder[idx] * 100}ms`,
            }}
          >
            {body}
          </p>
        </li>
      ))}
    </ul>
  );
}

export type { Props };
