import classNames from 'classnames';
import Link from 'next/link';
import { ArrowDownRightIcon } from '@heroicons/react/24/outline';

interface Props {
  children: string;

  [key: string]: any;
}

export default function AppLink({ children, className, href, ...rest }: Props) {
  return (
    <Link
      className={classNames('group flex items-center gap-0.5', className)}
      href={href}
      {...rest}
    >
      <>
        {children}
        <ArrowDownRightIcon className="relative -bottom-px h-3.5 -translate-x-full -translate-y-full transform-gpu stroke-[3px] opacity-0 transition-all group-hover:transform-none group-hover:opacity-100" />
      </>
    </Link>
  );
}
