import { JSXElementConstructor, ReactNode } from 'react';

interface NavItem {
  id: string;
  text: string;
}

interface SectionTitleProps {
  title: string;
}

interface SectionProps {
  children: (component: JSXElementConstructor<any>, props: SectionTitleProps) => ReactNode;
  navItem: NavItem;
}

const SectionTitle = ({ title, ...props }: SectionTitleProps) => <h2 {...props}>{title}</h2>;

export default function AppSection({ children, navItem }: SectionProps) {
  return <div id={navItem.id}>{children(SectionTitle, { title: navItem.text })}</div>;
}
