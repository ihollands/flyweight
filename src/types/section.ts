import { ReactNode } from 'react';
import type { Data } from '@/types/generic';
import type { NavItem } from '@/types/navigation';

interface IComponent extends Data {
  name: string;
}

interface ISection {
  navItem?: NavItem;
  component?: IComponent;
  headerClass?: string;
  wrapperClass?: string;
  children?: (isVisible: boolean) => ReactNode;
}

export type { ISection };
