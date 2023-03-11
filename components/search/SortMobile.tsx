import { useMemo } from "preact/hooks";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { JSX } from "preact";

const SORT_QUERY_PARAM = "sort";

// TODO: The search query should also be from a commerce schema
const options = [
  { value: "", label: "Relevância" },
  { value: "price:desc", label: "Maior Preço" },
  { value: "price:asc", label: "Menor Preço" },
  { value: "orders:desc", label: "Mais Pedidos" },
  { value: "name:asc", label: "Nome (A -> Z)" },
  { value: "name:desc", label: "Nome (Z -> A)" },
  { value: "release:desc", label: "Lançamentos" },
  { value: "discount:desc", label: "Maior Desconto" },
];

const useSort = () =>
  useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);

// TODO: Replace with "search utils"
const applySort = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  console.log(e.currentTarget.value);

  urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
  window.location.search = urlSearchParams.toString();
};

function SortMobile() {
  const sort = useSort();
  return (
    <div class="lg:hidden w-[180px] flex items-center lg:w-[380px]">
      <select className="appearance-none bg-[#f5f5f5] rounded-none p-4 border-0 text-[#000] text-xs border-0 text-xs font-bold lowercase outline-none py-[16px] w-[292px] px-[8px] text-center" id="sort" name="sort" onInput={applySort} class="w-min m-2">
        {options.map(({ value, label }) => (
          <option key={value} value={value} selected={value === sort}>
            <Text variant="caption-regular">{label}</Text>
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortMobile;
