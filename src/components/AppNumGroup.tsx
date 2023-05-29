interface Item {
  head: string;
  body: string;
}

interface Props {
  items: Item[];
}

export default function AppNumGroup({ items }: Props) {
  const displayNum = (idx: number): string => {
    const num = idx + 1;

    return `${num < 10 ? '0' : ''}${num}`;
  };
  return (
    <ul className="-m-2 flex-wrap md:flex">
      {items.map(({ head, body }, idx) => (
        <li
          key={idx}
          className="p-2 md:w-1/2 lg:w-1/3"
        >
          <p className="text-4xl">{displayNum(idx)}</p>
          <p className="text-3xl">{head}</p>
          <p className="text-base">{body}</p>
        </li>
      ))}
    </ul>
  );
}
