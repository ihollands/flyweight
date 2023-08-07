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
          <Transition.Child
            className="fixed bottom-0 left-0 top-0 z-10 w-full bg-white/90"
            enter="transition-all duration-500"
            enterFrom="w-0"
            enterTo="w-full right-0"
            leave="transition-all duration-500"
            leaveFrom="w-full right-0 left-auto"
            leaveTo="w-0 right-0 left-auto"
            onClick={() => setShow(false)}
          />
          <Transition.Child
            className=" fixed left-1/2 top-1/2 z-20 max-w-screen-xs -translate-x-1/2 -translate-y-1/2 overflow-auto border-2 border-black bg-white p-10 shadow-xl"
            enter="transition-all duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            style={{ width: 'calc(100vw - 2rem', maxHeight: 'calc(100vh - 60px)' }}
          >
            {children}
          </Transition.Child>
        </Transition>,
        domNode,
        id
      )}
    </>
  );
}
