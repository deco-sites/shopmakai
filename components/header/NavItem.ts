import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
  imageChildren?: Array<{
    image: LiveImage;
    href: string;
    label: string;
  }>
}
