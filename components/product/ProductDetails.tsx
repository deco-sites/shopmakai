import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

import { Head } from "$fresh/runtime.ts";

import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function ProductDetails({ page }: Props) {
  if (!page) {
    return null;
  }

  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
    isVariantOf
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);

  const [front, back] = images ?? [];

  return (
    <>
    <Head>
      <title>{`${isVariantOf.name} ${name}`}</title>
    </Head>
    <Container class="py-0">
      {/* Breadcrumb */}
      <Breadcrumb breadcrumbList={breadcrumbList} />
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-10">
        {/* Image Gallery */}
        <div class="flex flex-row overflow-auto scroll-x-mandatory scroll-smooth sm:gap-2">
          {[front, back ?? front].map((img, index) => (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class="scroll-snap-center min-w-[100vw] sm:min-w-0 sm:w-auto sm:h-[600px]"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {/* Product Info */}
        <div class="px-4 sm:px-0">
          {/* Code and name */}
          <div class="mt-4 sm:mt-8">
            <h1 class="font-bold text-[#444] lowercase text-[20px] flex justify-between items-center">
              {isVariantOf.name}
              <Icon id="Heart" width={20} height={20} strokeWidth={2} />
            </h1>
          </div>
          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-row gap-2 items-center">
              <strong class="font-semibold text-[24px] text-[#444]">
                {formatPrice(price, offers!.priceCurrency!)}
              </strong>
            </div>
            <Text tone="subdued" variant="caption-regular">
              <p dangerouslySetInnerHTML={{ __html: installments }}></p>
            </Text>
          </div>
          {/* Sku Selector */}
          <div class="mt-4 sm:mt-6">
            <ProductSelector product={product} />
          </div>
          <button class="py-1.5 px-3 border-1 border-primary-extra-light text-[12px] uppercase mt-6 w-[fit-content] text-primary cursor-pointer">
            Tabela de Medidas
          </button>
          {/* Add to Cart and Favorites button */}
          <div class="mt-4 sm:mt-10 flex flex-col gap-2">
            {seller && (
              <AddToCartButton
                skuId={productID}
                sellerId={seller}
              />
            )}
          </div>
          {/* Description card */}
          <div class="mt-4 sm:mt-6">
            <Text variant="caption-regular">
              {description && (
                <details>
                  <summary class="cursor-pointer">Descrição</summary>
                  <div class="ml-2 mt-2">{description}</div>
                </details>
              )}
            </Text>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
}

export default ProductDetails;
