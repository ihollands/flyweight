import { JSXElementConstructor, ReactNode } from 'react';

interface NavItem {
  id: string;
  text: string;
}

interface SectionTitleProps {
  title: string;
  blurb?: string;
}

interface SectionProps {
  className?: string;
  children: (component: JSXElementConstructor<any>, props: SectionTitleProps) => ReactNode;
  navItem: NavItem;
}

const SectionTitle = ({ title, blurb, ...props }: SectionTitleProps) => (
  <>
    <h2 {...props}>{title}</h2>
    {blurb && <p className="constrain mb-24">{blurb}</p>}
  </>
);

export default function AppSection({ className, children, navItem }: SectionProps) {
  return (
    <div
      className={className}
      id={navItem.id}
    >
      {children(SectionTitle, { title: navItem.text })}
    </div>
  );
}
