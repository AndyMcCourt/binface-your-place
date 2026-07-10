import { basePath } from './config';

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#ideas', label: 'Ideas' },
  { href: '/articles/', label: 'Articles' },
  { href: '/guide/', label: 'Guide' },
  { href: '/rules/', label: 'Rules' },
  { href: '/about/', label: 'About' },
];

export function sitePath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
