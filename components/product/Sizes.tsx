import type { Product } from "deco-sites/std/commerce/types.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";

import {useState} from 'preact/hooks'

export default function Sizes(product: Product) {
    const possibilities = useVariantPossibilities(product);
    const options = Object.entries(
      possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
    );

    const [url, setUrl] = useState(product.url)
  
    return (
    <div class="flex justify-between py-2">
        <select class="border-1 border-primary-extra-light md:px-4 cursor-pointer" onChange={(e) => {setUrl(e.target.value)}}>
            {
            options.map(([url, value]) => (
                <option value={url}>{value}</option>
            ))
            }
        </select>
        <a class="bg-white text-primary border-1 border-primary-extra-light px-6 md:px-12 py-2.5 font-bold hover:bg-pink hover:border-transparent hover:tracking-[1px] transition-[0.5s]" href={url}>comprar</a>
    </div>
    );
}