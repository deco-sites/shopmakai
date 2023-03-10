import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

function SearchControls({ page }: Props) {
  const open = useSignal(false);

  return (
    <Container class="flex flex-col justify-between">
      <div class="flex flex-row items-center justify-evenly mt-[50px] pl-[140px]">
        <div>
          <span class="text-sm tracking-[.36px]"><strong class="font-bold">{page?.products.length}</strong> produtos</span>
        </div>
        <Sort />
      </div>
    </Container>
  );
}

export default SearchControls;
