import { useState } from 'react';

import AppModal from '@/components/AppModal';
import ContactForm from '@/components/ContactForm';

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
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-10 lg:flex-row">
        {cols.map(({ title, intro, items }, idx) => (
          <div
            key={idx}
            className="lg:w-1/2 lg:odd:pr-10 lg:even:-ml-11"
          >
            <div className="lg:max-w-[36rem]">
              <h3 className="mb-6">{title}</h3>
              {intro && <p>{intro}</p>}
              <ul>
                {items.map(({ head, body, sublist }, idx) => {
                  return (
                    <li key={idx}>
                      {head ? <p className="mb-0 text-base">✹ {head}</p> : <br />}
                      {body && <p className="last:pb-4">{body}</p>}
                      {sublist && (
                        <ul className="-mt-4">
                          {sublist.map((item, idx) => (
                            <li
                              key={idx}
                              className="ml-4"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-row items-center gap-6 lg:mt-20">
        <button
          type="button"
          className="btn-dark"
          onClick={() => setShowModal(true)}
        >
          Let&apos;s work together
        </button>
        <p>Reach out to us for pricing</p>
      </div>
      <AppModal
        show={showModal}
        id="col-group-modal"
        setShow={setShowModal}
      >
        <ContactForm />
      </AppModal>
    </div>
  );
}

export type { Props };
