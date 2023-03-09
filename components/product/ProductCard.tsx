import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Sizes from "$store/islands/Sizes.tsx"

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
    isVariantOf
  } = product;

  /**
   * I did not really liked the images from our default base store.
   * To overcome this issue without generating another catalog altogheter
   * I decided to get images from unplash. However, you should get the images
   * front the catalog itself. To do this, just uncomment the code below
   */
  const [front, back] = images ?? [];

  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group"
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={200}
            height={279}
            class="w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={200}
            height={279}
            class="w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
        </div>

        <div class="flex justify-between py-2">
          <p class="text-primary lowercase text-[12px]">
            {
              isVariantOf?.name ? isVariantOf.name : name
            }
          </p>
          <div class="flex items-center">
            <p class="text-primary font-bold">
              {formatPrice(price, offers!.priceCurrency!)}
            </p>
          </div>
        </div>
      </a>
      <Sizes {...product} />
    </div>
  );
}

export default ProductCard;
