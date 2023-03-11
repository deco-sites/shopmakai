import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import SortMobile from "$store/components/search/SortMobile.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

function SearchControls({ page }: Props) {
  const open = useSignal(false);
  const filters = page?.filters;

  if (!filters || filters.length === 0) {
    return null;
  }

  return (
    <Container class="flex flex-col justify-between">
      <div class="flex flex-col-reverse items-center mt-[30px] justify-evenly lg:(flex-row mt-[50px] pl-[140px])">
        <div class="my-[16px] lg:my-0">
          <span class="text-sm tracking-[.36px]"><strong class="font-bold">{page?.products.length}</strong> produtos</span>
        </div>
        <div class="flex flex-row gap-5 lg:gap-0">
          <Sort />
          <SortMobile />
          <Button
            variant="quiet"
            class="w-[180px] bg-[#f5f5f5] rounded-none p-4 border-0 text-[#000] text-xs font-bold lowercase lg:hidden"
            onClick={() => {
              open.value = true;
            }}
          >
            Filtrar
          </Button>
          <Modal
            class="lg:hidden"
            title="FILTROS"
            mode="sidebar-right"
            open={open.value}
            onClose={() => {
              open.value = false;
            }}
          >
            <Filters filters={filters} />
          </Modal>
        </div>
      </div>
    </Container>
  );
}

export default SearchControls;
