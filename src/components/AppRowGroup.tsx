import { transitionVisible } from '@/helpers/utils';

interface Row {
  head: string;
  body: string;
}

interface Props {
  isVisible: boolean;
  rows: Row[];
  children?: any;
}

const transitionClass = transitionVisible([
  'lg:flex justify-between border-t border-black py-6 transition-all duration-1000 ease-out last:border-y',
  'opacity-0 translate-y-1/4',
  'opacity-100 translate-y-0',
]);

export default function AppRowGroup({ isVisible, rows, children }: Props) {
  const itemIdxRange = [...Array.from({ length: rows.length }, (x, i) => i)];

  return (
    <div>
      <div>
        {rows.map(({ head, body }, idx) => (
          <div
            key={idx}
            className={transitionClass(isVisible)}
            style={{
              transitionDelay: `${idx * 200}ms`,
            }}
          >
            <h3 className="w-full lg:mb-0">✹ {head}</h3>
            <p className="w-full pr-4">{body}</p>
          </div>
        ))}
      </div>

      {children && <div className="mt-16">{children}</div>}
    </div>
  );
}

export type { Props };
