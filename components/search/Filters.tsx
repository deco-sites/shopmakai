import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";
import { useState } from 'preact/hooks';

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

export interface FilterToggleDrp extends FilterToggle {
  styleDrop: string
}

function FilterValues({ key, values, styleDrop }: FilterToggleDrp) {

  return (
    <ul class={`${styleDrop} flex flex-col max-h-[200px] overflow-auto scrollStyle`}>
      {values.map(({ label, value, url, selected, quantity }) => {
        return (
          <a href={url} class="flex mb-[6px]">
            <div class="w-[21px] h-[21px] rounded-md border-[1px]">
              <input class="cursor-pointer hidden" type="checkbox" checked={selected} />
            </div>
            <p class="lowercase text-sm text-[#616161] lg:(text-xs text-[#000]) tracking-[.36px] font-normal ml-[5px] mt-[2px]">{label}</p>
          </a>
        );
      })}
    </ul>
  );
}

export default function Filters({ filters }: Props) {
  return (
    <>
      <h5 class={`hidden lg:block border-b-1 border-[#f5f5f5] py-[16px] text-base font-bold tracking-[.36px]`}>FILTROS</h5>
      <ul class={`p-[1rem] pl-8 lg:pl-0 flex flex-col overflow-y-auto`}>
        {filters
          .filter(isToggle)
          .map((filter) => {
            const [style, setStyle] = useState('');
            const [rotates, setRotates] = useState('');
            const handleStyle = () => {
              if(style == '') {
                setStyle("hidden");
                setRotates("rotate-180");
              } else {
                setStyle("");
                setRotates("");
              }
            }
            return (
              <li class="relative flex flex-col gap-4 border-b-1 border-[#f5f5f5] py-[16px] ">
                <p onClick={handleStyle} class="uppercase font-bold text-sm text-[#dbb7cb] lg:(text-black text-xs) cursor-pointer  uppercase tracking-[.36px] font-bold z-20">{filter.label}</p>
                <Icon class={`${rotates} absolute right-0 top-3 z-10`} id="ChevronUp" width={23} height={23} strokeWidth={0.01} />
                <FilterValues {...filter} styleDrop={style} />
              </li>
            )
          })}
      </ul>
      <div class="z-50 absolute bottom-0 bg-white w-full flex h-16 border-t border-[#f2f4f5] lg:hidden">
        <button class="outline-none text-[#616161] tracking-[1px] font-semibold flex items-center justify-center px-[1.5rem] py-[1rem] m-[12px] bg-[#eed7e4] w-6/12">limpar</button>
        <button class="outline-none text-[#616161] tracking-[1px] font-semibold flex items-center justify-center px-[1.5rem] py-[1rem] m-[12px] bg-[#eed7e4] w-6/12">aplicar</button>
      </div>
    </>
  );
}
