import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product }: Props) {
  const possibilities = useVariantPossibilities(product);
  const { url: currentUrl } = product;

  return (
    <ul class="flex flex-col gap-4">
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-col gap-2">
          <ul class="flex flex-row">
            {Object.entries(possibilities[name]).map(([url, value]) => (
              <li>
                <a href={url} class={`${url === currentUrl ? "bg-pink text-white" : "bg-white"} px-3 py-1.5 rounded-[3px] text-[13px]`}>
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
