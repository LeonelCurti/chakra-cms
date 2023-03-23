export type PublicNavItem = {
  label: string;
  subLabel?: string;
  children?: Array<PublicNavItem>;
  href?: string;
}