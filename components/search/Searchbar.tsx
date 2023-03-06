/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import ProductCard from "$store/components/product/ProductCard.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

// Editable props
export interface EditableProps {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;
  /**
   * TODO: Receive querystring from parameter in the server-side
   */
  query?: string;
}

export type Props = EditableProps & {
  /**
   * @title Product suggestions
   * @description Product suggestions displayed on searchs
   */
  products?: Product[];
};

const terms = [
  "Vestido",
  "Polo",
  "Saia",
];

function Searchbar({
  placeholder = "What are you looking for?",
  action = "/s",
  name = "q",
  query,
  products,
}: Props) {
  return (
    <div class="overflow-y-auto">
      <form
        id="searchbar"
        action={action}
        class="flex gap-3 px-3 md:px-0 py-1.5 border-1 md:border-0 md:border-b-1 border-primary-light"
      >
        <input
          class="flex-grow outline-none"
          name={name}
          defaultValue={query}
          placeholder={placeholder}
        />
        <Button
          variant="icon"
          aria-label="Search"
          htmlFor="searchbar"
        >
          <Icon
            class="text-icon-subdued"
            id="MagnifyingGlass"
            width={20}
            height={20}
            strokeWidth={0.01}
          />
        </Button>
      </form>
    </div>
  );
}

export default Searchbar;
