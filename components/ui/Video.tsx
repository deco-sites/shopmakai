import Container from "$store/components/ui/Container.tsx";
import Video from "deco-sites/std/components/Video.tsx";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";
import { Suspense } from "preact/compat";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @description ID of video
   */
  video: LiveVideo;
  /**
   * @description Thumbnail of video
   */
  thumb: LiveImage;
}

function VideoComponent({ video, thumb }: Props) {
  return (
    <>
      { video && 
        (
          <Container class="w-11/12 lg:w-full mx-auto my-16 lg:my-24">
            <Suspense fallback={null}>
              <Video 
                class="w-full"
                allowFullScreen 
                frameBorder="0" 
                src={video} 
                width={375} 
                height={210} 
                controls
                poster={thumb}
                fetchPriority={"low"}
                decoding={"async"}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Video>
              </Suspense>
          </Container>
        )
      }
    </>
  );
}

export default VideoComponent;
