import useVisible from '@/hooks/visible';
import { ReactNode } from 'react';
import { NavItem } from '@/types/navigation';

interface Props {
  headerClass?: string;
  className?: string;
  navItem: NavItem;
  children?: (isVisible: boolean, navItem: NavItem) => ReactNode;
}

export default function AppSection({ className, children, navItem }: Props) {
  const { elRef, isVisible } = useVisible({ rootMargin: '-100px' });
  return (
    <div
      ref={elRef}
      className={className}
      id={navItem.id}
    >
      {children && children(isVisible, navItem)}
    </div>
  );
}
