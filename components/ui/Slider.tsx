import { ComponentChildren } from "preact";
import { Children } from "preact/compat";

interface Props {
  children?: ComponentChildren;
}

function Slider({ children }: Props) {
  return (
    <ul class={`flex flex-nowrap ${children.length == 2 ? "justify-evenly" : "" } md:justify-evenly overflow-x-auto max-w-full w-full scroll-x-mandatory scroll-smooth scrollbar-none gap-6`}>
      {Children.map(
        children,
        (child) => <li class="scroll-snap-center">{child}</li>,
      )}
    </ul>
  );
}

export default Slider;
