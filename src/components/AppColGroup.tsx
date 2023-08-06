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
            <div className="max-w-lg xl:max-w-2xl 3xl:max-w-3xl">
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
