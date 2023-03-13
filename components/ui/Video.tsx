import Container from "$store/components/ui/Container.tsx";

export interface Props {
  /**
   * @description ID of video
   */
  id: string;
}

function Video({ id }: Props) {
  return (
    <>
      { id && 
        (
          <Container class="w-11/12 lg:w-full mx-auto my-16 lg:my-24">
            <iframe 
              preload="none"
              loading="lazy"
              width="100%" 
              height="500" 
              src={"https://www.youtube.com/embed/" + id} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </Container>
        )
      }
    </>
  );
}

export default Video;
