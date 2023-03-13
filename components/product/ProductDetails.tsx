import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Carousel from "$store/components/ui/CarouselZoom.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import { useState } from 'preact/hooks';
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

  const image = images ?? [];

  const [zoom, setZoom] = useState(false);

  const handleZoom = () => {
    if(zoom) {
      setZoom(false)
    } else {
      setZoom(true)
    }
  }

  return (
    <>
    <Head>
      <title>{`${isVariantOf.name} ${name}`}</title>
    </Head>
    <Container class="py-0">
      {/* Breadcrumb */}
      <Breadcrumb breadcrumbList={breadcrumbList} />
      <div class="flex flex-col sm:justify-center gap-4 sm:flex-row sm:gap-10">
        {/* Image Gallery */}
        <div class="flex flex-row sm:(flex-col mr-[32px]) overflow-auto scroll-x-mandatory scroll-smooth sm:gap-1">
          {image.map((img, index) => (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class="cursor-zoom-in scroll-snap-center min-w-[100vw] sm:(min-w-0 w-auto max-w-[652px] h-[100%]) "
              sizes="(max-width: 640px) 100vw, 100vw"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              index={index}
              onClick={handleZoom}
            />
          ))}
        </div>
        {/* Product Info */}
        <div class="px-4 sm:px-0 md:w-[30%]">
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
      <div class={`${zoom ? '' : 'hidden'} sm:(z-50 fixed w-full h-full bottom-0 left-0)`}>
          <Button onClick={handleZoom} class="mr-[16px] absolute z-50 right-0 top-[10px]" variant="icon">
            <Icon id="XMark" class="text-[#fff]" width={60} height={60} strokeWidth={2} />
          </Button>
        <Carousel
          // this padding top (pt) is the aspect-ratio (height/width) value from the image below for each viewport
          class={`w-full h-full`}
          animationDuration={60}
          leftArrow={
            <Icon
              width={50}
              height={50}
              id="ChevronLeft"
              strokeWidth={1}
            />
          }
          rightArrow={
            <Icon
              width={50}
              height={50}
              id="ChevronRight"
              strokeWidth={1}
            />
          }
          dot={<div style={{border: "2px solid transparent", backgroundColor: "#d8d8d8", width: "13px", height: "13px", borderRadius: "100%"}} />}
        >
          {image.map((img, index) => (
            <Image
              class="w-full"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={"lazy"}
              index={index}
            />
          ))}
        </Carousel>
      </div>
    </Container>
    </>
  );
}

export default ProductDetails;
