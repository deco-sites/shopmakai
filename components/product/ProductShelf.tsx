import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

function ProductShelf({
  title,
  products,
}: Props) {
  return (
    <Container class="flex flex-col items-center justify-between py-10">
      {title && (
        <h2 class="text-left text-[20px] md:text-[25px] font-bold w-full">{title}</h2>
      )}
      <Slider>
        {products?.map((product, index) => {
          const ml = index === 0 ? "ml-4" : "";
          const mr = index === products.length - 1 ? "mr-4" : "";

          return (
            <div
              class={`min-w-[200px] max-w-[200px] sm:min-w-[287px] sm:max-w-[287px] ${ml} ${mr}`}
            >
              <ProductCard key={index} product={product} preload={false} />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
}

export default ProductShelf;
