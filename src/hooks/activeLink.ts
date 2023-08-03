import { MutableRefObject, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function useActiveLink(routePath: string): MutableRefObject<boolean> {
  const isActive = useRef(false);
  const pathname = usePathname();

  isActive.current = routePath === pathname;

  return isActive;
}
