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

function Sort() {
  const sort = useSort();
  return (
    <div class="hidden w-[180px] lg:flex items-center lg:w-[380px]">
      <p class="hidden pr-[20px] lowercase text-xs tracking-[.36px] font-normal lg:(block whitespace-nowrap)">ordenar por: </p>
      <select className="lowercase outline-none py-[16px] w-[292px] px-[8px] text-left font-normal bg-[#fff] border-1 border-[#d1d1d1]" id="sort" name="sort" onInput={applySort} class="w-min m-2">
        {options.map(({ value, label }) => (
          <option key={value} value={value} selected={value === sort}>
            <Text variant="caption-regular">{label}</Text>
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
