import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  node?: HTMLElement;
  id?: string;
}

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="fixed inset-0 z-50 flex place-items-center justify-center bg-white/90">
    <div className="max-w-screen-md bg-white p-5 shadow-xl">{children}</div>
  </div>
);

export default function AppModal({ children, id, node = document.body }: Props) {
  return createPortal(<Container>{children}</Container>, node, id);
}
