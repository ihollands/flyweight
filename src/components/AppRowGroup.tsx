interface Row {
  head: string;
  body: string;
}

interface Props {
  rows: Row[];
}

export default function AppRowGroup({ rows }: Props) {
  return (
    <div className="border-b border-black">
      {rows.map(({ head, body }, idx) => (
        <div
          key={idx}
          className="flex justify-between border-t border-black py-6"
        >
          <h3 className="mb-0 w-1/2">✹ {head}</h3>
          <p className="w-1/2 text-base">{body}</p>
        </div>
      ))}
    </div>
  );
}
