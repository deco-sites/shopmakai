import Icon from "$store/components/ui/Icon.tsx";
import Carousel from "$store/components/ui/Carousel.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Head } from "$fresh/runtime.ts";

export interface Image {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description when user clicks on the image, go to this link */
  href: string;
  /** @description Image's alt text */
  alt: string;
}

interface Dimension {
  width: number;
  height: number;
}

const aspectRatio = ({ width, height }: Dimension) =>
  ((height / width) * 100).toFixed(2);

export interface Props {
  images?: Image[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
}

function BannerCarousel({ images, preload }: Props) {
  const mobileDimension: Dimension = {
    width: 768,
    height: 1024,
  };

  const desktopDimension: Dimension = {
    width: 1920,
    height: 740,
  };


  const allImages:string[] = []
  images?.forEach(({mobile, desktop}) => {
    allImages.push(mobile)
    allImages.push(desktop)
  })
  
  return (
    <>
      <Head>
        {
          allImages?.map((image, index) => {
            if(index === 0){
              return (
                <link rel="preload" as="image" href={image}></link>
              )
            }
            
          })
        }
      </Head>
      <Carousel
        // this padding top (pt) is the aspect-ratio (height/width) value from the image below for each viewport
        class={`w-full h-full max-w-[1843px] m-auto pt-[${aspectRatio(mobileDimension)}%] md:pt-[${aspectRatio(desktopDimension)}%] xxl:pt-[680px]`}
        animationDuration={5}
        dot={<Icon id="Circle" width={8} height={8} strokeWidth={2} />}
      >
        {images?.map(({ mobile, desktop, alt }, index) => {
          const isFirst = index === 0;
          const lcp = isFirst && preload;

          return (
            <Picture class="w-full h-full">
              <Source
                media="(max-width: 1024px)"
                fetchPriority={lcp ? "high" : "auto"}
                src={mobile}
                width={414}
                height={551}
              />
              <Source
                media="(min-width: 1025px)"
                fetchPriority={lcp ? "high" : "auto"}
                src={desktop}
                width={1366}
                height={517}
              />
              <img
                class="w-full"
                loading={lcp ? "eager" : "lazy"}
                src={desktop}
                alt={alt}
                decoding={lcp ? "sync" : "async"} 
              />
            </Picture>
          );
        })}
      </Carousel>
    </>
  );
}

export default BannerCarousel;
