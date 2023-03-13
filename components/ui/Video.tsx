import Container from "$store/components/ui/Container.tsx";
import Video from "deco-sites/std/components/Video.tsx";
import type { Video as LiveVideo } from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @description ID of video
   */
  video: LiveVideo;
}

function VideoComponent({ video }: Props) {
  return (
    <>
      { video && 
        (
          <Container class="w-11/12 lg:w-full mx-auto my-16 lg:my-24">
            <Video 
              class="w-full"
              allowFullScreen 
              frameBorder="0" 
              src={video} 
              width={375} 
              height={210} 
              controls
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Video>
          </Container>
        )
      }
    </>
  );
}

export default VideoComponent;
