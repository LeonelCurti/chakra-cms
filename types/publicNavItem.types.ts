export type PublicNavItem = {
  label: string;
  children?: Array<PublicNavItem>;
  href?: string;
}