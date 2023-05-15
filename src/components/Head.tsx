import NextHead from 'next/head';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title?: string;
}

export default function Head({ children, title }: Props) {
  return (
    <NextHead>
      <>
        {title && <title>Flyweight{`: ${title}`}</title>}
        {children}
      </>
    </NextHead>
  );
}
