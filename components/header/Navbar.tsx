import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { ComponentChildren } from "preact";

import type { NavItem as Item } from "./NavItem.ts";

function NavItem({
  href,
  label,
}: { href: string; label: ComponentChildren }) {
  return (
    <a href={href}>
      <Text
        class="uppercase font-bold text-primary tracking-[1px]"
        variant="body-regular"
      >
        {label}
      </Text>
    </a>
  );
}

function Navbar({ items, logo }: {
  items: Item[];
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden flex flex-row justify-between items-center h-[53px] border-b-1 border-default w-full px-4 gap-4">
        <HeaderButton variant="menu" />

        <a href="/" class="flex-grow w-[180px]" aria-label="Store logo">
          <Picture class="block" preload="false">
            <Source
              fetchPriority="auto"
              src={logo}
              width={180}
              height={21}
            />
            <img
              class="object-cover w-full"
              loading="eager"
              src={logo}
              alt="Logo Makai"
            />
          </Picture>
        </a>

        <div class="flex gap-6">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center h-[80px] border-b-1 border-default w-full max-w-[1300px] m-auto px-4">
        <a href="/" aria-label="Store logo" class="w-[180px]">
          <Picture class="block" preload="false">
            <Source
              fetchPriority="auto"
              src={logo}
              width={185}
              height={21}
            />
            <img
              class="object-cover w-full"
              loading="eager"
              src={logo}
              alt="Logo Makai"
            />
          </Picture>
        </a>
        <div class="flex-grow flex gap-6 justify-center">
          {items.map((item) => <NavItem {...item} />)}
        </div>
        <div class="flex items-center justify-end gap-6">
          <HeaderButton variant="search" />
          <a href="/login" aria-label="Log in">
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </a>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
