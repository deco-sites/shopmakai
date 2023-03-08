import Container from "$store/components/ui/Container.tsx";

export interface Props {
  /**
   * @description H1 of the rich text
   */
  mainHeading: string;
  /**
   * @description H2 of the rich text
   */
  secondaryHeading: string;
  /**
   * @description text of the rich text
   */
  text: string;
}

function RichText({ mainHeading, secondaryHeading, text }: Props) {
  return (
    <Container class="mx-auto my-16 lg:my-24">
      {mainHeading && (
        <h1 class="mx-auto text-center text-base text-black font-black max-w-xs lg:max-w-none tracking-wide">{mainHeading}</h1>
      )}
      {secondaryHeading && (
        <h2 class="mx-auto text-center text-sm text-black font-semibold max-w-[90%] my-3 tracking-wide">{secondaryHeading}</h2>
      )}
      {text && (
        <p class="mx-auto text-center text-xs lg:text-sm text-primary font-normal max-w-[360px] lg:max-w-[722px] mt-10 tracking-wide leading-7">{text}</p>
      )}
    </Container>
  );
}

export default RichText;
