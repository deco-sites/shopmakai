import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { ComponentChildren } from "preact";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import type { NavItem as Item } from "./NavItem.ts";

function NavItem(itemProps: Item) {
  return (
    <div class="relative hover:children:block h-full">
      <a
        href={itemProps.href ?? `/search?ft=${itemProps.label}`}
        class="flex items-center font-semibold px-1 h-full"
      >
        <span class="text-[13px] uppercase text-primary hover:text-pink tracking-[1px] h-full flex items-center">
          {itemProps.label}
        </span>
      </a>
      {
        itemProps.children && <div class="bg-[#f5f5f5] w-[100vw] p-6 z-10 hidden fixed left-0">
        <div class="max-w-[1182px] m-auto flex gap-[96px] justify-center">
          <div class="flex flex-col gap-3">
            {
              itemProps.children.map(child => {
                return (
                  <div class="">
                    <a href={child.href} class="uppercase text-[12px]">{child.label}</a>
                  </div>
                )
              })
            }
          </div>
          <div class="flex gap-[24px]">
            {
              itemProps.imageChildren?.map(child => {
                return(
                  <a href={child.href}>
                    <Picture class="block" preload={false}>
                      <Source
                        fetchPriority="auto"
                        src={child.image}
                        width={195}
                        height={239}
                      />
                      <img
                        class="object-cover"
                        loading="lazy"
                        src={child.image}
                        alt="Logo Makai"
                      />
                    </Picture>
                    <p class="uppercase text-[12px] mt-[12px]">{child.label}</p>
                  </a>
                )
              })
            }

          </div>
        </div>
      </div>
      }
      
    </div>
  );
}

function Navbar({ items, logo }: {
  items: Item[];
  logo: LiveImage;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden flex flex-col justify-around items-center h-[110px] w-full">
        <div class="flex flex-row justify-between items-center w-full px-4 gap-4">
          <HeaderButton variant="menu" />

          <a href="/" class="flex-grow w-[134px] flex justify-center" aria-label="Store logo">
            <Picture class="block" preload={false}>
              <Source
                fetchPriority="auto"
                src={logo}
                width={134}
                height={15}
              />
              <img
                class="object-cover"
                loading="eager"
                src={logo}
                alt="Logo Makai"
              />
            </Picture>
          </a>

          <div class="flex gap-6">
            <HeaderButton variant="cart" />
          </div>
        </div>
        <div class="w-full px-5">
          <HeaderButton variant="search" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center h-[80px] border-b-1 border-default w-full max-w-[1300px] m-auto px-4">
        <a href="/" aria-label="Store logo" class="w-[180px]">
          <Picture class="block" preload={false}>
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
        <div class="flex-grow flex gap-6 justify-center items-center h-full">
          {items.map((item) => <NavItem {...item} />)}
        </div>
        <div class="flex items-center justify-end gap-6">
          <HeaderButton variant="search" />
          <a href="/login" class="text-primary" aria-label="Log in">
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </a>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
