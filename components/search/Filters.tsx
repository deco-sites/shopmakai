import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function FilterValues({ key, values }: FilterToggle) {

  return (
    <ul class={`flex flex-col max-h-[200px] overflow-auto`}>
      {values.map(({ label, value, url, selected, quantity }) => {
        return (
          <a href={url} class="flex mb-[6px]">
            <div class="w-[21px] h-[21px] rounded-md border-[1px]">
              <input class="cursor-pointer hidden" type="checkbox" checked={selected} />
            </div>
            <p class="lowercase text-xs tracking-[.36px] font-normal ml-[5px] mt-[2px]">{label}</p>
          </a>
        );
      })}
    </ul>
  );
}

export default function Filters({ filters }: Props) {
  return (
    <>
      <h5 class="border-b-1 border-[#f5f5f5] py-[16px] text-base font-bold tracking-[.36px]">FILTROS</h5>
      <ul class="flex flex-col overflow-y-auto">
        {filters
          .filter(isToggle)
          .map((filter) => (
            <li class="flex flex-col gap-4 border-b-1 border-[#f5f5f5] py-[16px] ">
              <p class="text-xs uppercase tracking-[.36px] font-bold">{filter.label}</p>
              <FilterValues {...filter} />
            </li>
          ))}
      </ul>
    </>
  );
}
