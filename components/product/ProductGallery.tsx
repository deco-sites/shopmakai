import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

function ProductGallery({ page }: Props) {
  const filters = page?.filters;

  if (!filters || filters.length === 0) {
    return null;
  }

  return (

    <Container class="w-full max-w-[90vw]">
      <div class="w-full flex max-w-[1280px]">
        <div class="hidden max-w-[500px] min-w-[230px] lg:block">
          <Filters filters={filters} />
        </div>
        <div class="relative grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 items-center w-full mt-[50px]">
          {page?.products?.map((product, index) => (
            <div class="w-full sm:px-2 list-none">
              <ProductCard product={product} preload={index === 0} />
            </div>
          ))}
        </div>
      </div>

      <div class="flex flex-row items-center justify-center gap-2 my-4">
        <Button
          as="a"
          rel="prev"
          disabled={!page.pageInfo.previousPage}
          href={page.pageInfo.previousPage ?? "#"}
          variant="icon"
        >
          <Text tone={page.pageInfo.previousPage ? "default" : "subdued"}>
            <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
          </Text>
        </Button>
        <Text variant="caption-regular">
          {page.pageInfo.currentPage + 1}
        </Text>
        <Button
          as="a"
          rel="next"
          disabled={!page.pageInfo.nextPage}
          href={page.pageInfo.nextPage ?? "#"}
          variant="icon"
        >
          <Text tone={page.pageInfo.nextPage ? "default" : "subdued"}>
            <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
          </Text>
        </Button>
      </div>
    </Container>
  );
}

export default ProductGallery;
