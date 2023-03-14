import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
    title: string;
    products: LoaderReturnType<Product[]>;
    image: {src: LiveImage; alt: string}
    background: "gray" | "white";
}

function productShelfWithImage({title, products, image, background}) {

    return(
        <div class={`bg-${background} w-full`}>
            <Container class="flex flex-col items-center justify-between py-10 max-w-[90vw] md:max-w-[1300px] m-auto">
                <div class="text-left text-[20px] md:text-[25px] font-bold w-full">
                    {title && (
                        <h2>{title}</h2>
                    )}
                </div>
                <div class="w-full flex flex-col md:flex-row justify-between items-center">
                    <div class="max-w-[450px]">
                        <Picture class="w-full h-full">
                            <Source
                            fetchPriority={"low"}
                            src={image.src}
                            width={426}
                            height={479}
                            />
                            <img
                            class="w-full"
                            loading={"lazy"}
                            src={image.src}
                            alt={image.alt}
                            />
                        </Picture>
                    </div>
                    <div class="w-full mt-6 md:mt-0">
                        <Slider>
                            {products?.map((product, index) => {

                            return (
                                <div
                                class={`min-w-[170px] max-w-[170px] sm:min-w-[287px] sm:max-w-[287px]`}
                                >
                                <ProductCard key={index} product={product} preload={false} />
                                </div>
                            );
                            })}
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
    
}

export default productShelfWithImage