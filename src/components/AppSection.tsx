// import useIntersection from '@/hooks/intersection';
import { ReactNode } from 'react';
import { NavItem } from '@/types/navigation';

interface Props {
  headerClass?: string;
  className?: string;
  navItem: NavItem;
  children?: (isVisible: boolean, navItem: NavItem) => ReactNode;
}

export default function AppSection({ className, children, navItem }: Props) {
  // const { elRef, isActive } = useIntersection(
  //   { rootMargin: '-100px' },
  //   (entry, obs, setIsVisible) => {
  //     if (entry.isIntersecting) {
  //       setIsVisible(true);
  //     }
  //   }
  // );

  return (
    <div
      className={className}
      id={navItem.id}
    >
      {children && children(true, navItem)}
    </div>
  );
}
