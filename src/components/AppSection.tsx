import classNames from 'classnames';
import { ReactNode } from 'react';
import { NavItem } from '@/types/navigation';

interface Props {
  headerClass?: string;
  className?: string;
  navItem: NavItem;
  children?: (isVisible: boolean, navItem: NavItem) => ReactNode;
}

export default function AppSection({ className, children, navItem }: Props) {
  return (
    <div
      className={classNames(className, 'scroll-mt-20')}
      id={navItem.id}
    >
      {children && children(true, navItem)}
    </div>
  );
}
