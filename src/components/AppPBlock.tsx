import classNames from 'classnames';
import { transitionVisible } from '@/helpers/utils';

interface Props {
  className?: string;
  items: string[];
  isVisible: boolean;
}

const transitionClass = transitionVisible([
  'transition-all duration-1000 ease-out',
  'translate-x-1/4 opacity-0',
  'translate-x-0 opacity-100',
]);

export default function AppPBlock({ className, items, isVisible }: Props) {
  return (
    <div className={classNames(className, 'w-full')}>
      {items.map((item: string, idx: number) => (
        <p
          key={idx}
          className={transitionClass(isVisible)}
          style={{
            transitionDelay: `${idx * 100}ms`,
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
