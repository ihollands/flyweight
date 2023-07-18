import { type ReactNode } from 'react';
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
  if (typeof window === 'undefined') {
    return;
  }

  const domNode = node || document.body;

  return createPortal(
    <Transition show={show}>
      <Transition.Child
        enter="transition-all duration-500 fixed bottom-0 left-0 top-0 z-10 bg-white/80"
        enterFrom="w-0"
        enterTo="w-full"
        leave="transition-all duration-500 w-full fixed bottom-0 left-0 top-0 z-10 bg-white/80"
        leaveFrom="w-full"
        leaveTo="w-0"
        onClick={() => setShow(false)}
      >
        <div className="" />
      </Transition.Child>
      <Transition.Child>
        <div
          className="fixed left-1/2 top-1/2 z-20 max-w-screen-xs -translate-x-1/2 -translate-y-1/2 bg-black p-10 text-white shadow-xl"
          style={{ width: 'calc(100vw - 2rem' }}
        >
          {children}
        </div>
      </Transition.Child>
    </Transition>,
    domNode,
    id
  );
}
