import Container from "$store/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

export type typesSources =
  "image" |
  "video"


export interface InstafeedProps {
  /**
   * @description Type of source
   */
  typeSource: typesSources,
  /**
   * @description Image or video
   */
  media: LiveImage | LiveVideo,
  /**
   * @description Alternative text for Image or video
   */
  alt: string
  /**
   * @description Link for page...
   */
  href: string
}

export interface Props {
  /**
   * @description Add your medias
   */
  medias: InstafeedProps[];
}

function Instafeed({ medias }: Props) {
  return (
    <Container class="mx-auto">
      <div class="w-[90%] mx-auto mb-[13px] md:(flex items-center m-0 px-[20px]) xl:px-0">
        <h2 class="text-xl tracking-[.36px] text-black uppercase font-black mb-[5px] md:(mb-[0] mr-[15px])">STALK US AT:</h2>
        <a class="text-[15px] font-normal font-black tracking-[.36px]" href="https://www.instagram.com/makaibikini/">@makaibikini</a>
      </div>
      <div class="w-[90%] mx-auto grid grid-cols-3 grid-rows-3 gap-[15px] lg:(w-full max-w-[950px] m-0 mt-[40px] px-[20px]) xl:px-0">
        {medias?.map(({typeSource, media, alt, href}, index) => {
          if (typeSource == "image") {
            return (
              <a href={href} key={index} class="w-full max-w-[180px] max-h-[180px] lg:(max-w-[300px] max-h-[300px])">
                <img class="w-full max-w-[180px] max-h-[180px] aspectRatio object-cover lg:(max-w-[300px] max-h-[300px])" src={media} alt={alt} />
              </a>
            )
          } else  {
            return (
              <a href={href} key={index} class="w-full max-w-[180px] max-h-[180px] lg:(max-w-[300px] max-h-[300px])">
                <video class="w-full max-w-[180px] max-h-[180px] aspectRatio object-cover lg:(max-w-[300px] max-h-[300px])" loop autoPlay muted>
                  <source src={media} />
                </video>
              </a>
            )
          }
        })}
      </div>
      
    </Container>
  );
}

export default Instafeed;
