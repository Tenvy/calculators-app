import { ReactNode } from 'react';

export type MenuItemProps = {
  title: string;
  href: string;
  isShow?: boolean;
  className?: string;
  children?: ReactNode;
  hideIcon?: boolean;
};