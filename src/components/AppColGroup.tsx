interface Bullet {
  head: string;
  body?: string;
  sublist?: string[];
}

interface Col {
  title: string;
  intro?: string;
  items: Bullet[];
}

interface Props {
  isVisible: boolean;
  cols: Col[];
}

export default function AppColGroup({ cols }: Props) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      {cols.map(({ title, intro, items }, idx) => (
        <div
          key={idx}
          className="lg:w-1/2 lg:odd:pr-10 lg:even:-ml-11"
        >
          <h3 className="mb-6">{title}</h3>
          {intro && <p className="text-base">{intro}</p>}
          <ul>
            {items.map(({ head, body, sublist }, idx) => {
              return (
                <li key={idx}>
                  {head ? <p className="mb-0 text-base">✹ {head}</p> : <br />}
                  {body && <p className="text-base last:pb-4">{body}</p>}
                  {sublist && (
                    <ul>
                      {sublist.map((item, idx) => (
                        <li
                          key={idx}
                          className="ml-4"
                        >
                          <span>-</span> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export type { Props };
