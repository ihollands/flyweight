import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from '@headlessui/react';

interface Props {
  show: boolean;
  children: ReactNode;
  node?: HTMLElement;
  id?: string;
  setShow: (show: boolean) => void;
}

export default function AppModal({ children, id, node, show = false, setShow }: Props) {
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (typeof window === 'undefined') {
    return null;
  }

  const domNode = node || document.body;

  return (
    <>
      {createPortal(
        <Transition show={show}>
          <div
            className="fixed inset-0 z-10 bg-white/90"
            onClick={() => setShow(false)}
          />
          <div
            className="fixed left-1/2 top-1/2 z-20 max-w-screen-xs -translate-x-1/2 -translate-y-1/2 overflow-auto border-2 border-black bg-white p-10 shadow-xl"
            style={{ width: 'calc(100vw - 2rem', maxHeight: 'calc(100vh - 60px)' }}
          >
            {children}
          </div>
        </Transition>,
        domNode,
        id
      )}
    </>
  );
}
