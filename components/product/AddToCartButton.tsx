import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";

interface Props {
  skuId: string;
  sellerId: string;
}

function AddToCartButton({ skuId, sellerId }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <Button {...props} variant="empty" class="w-full bg-pink text-black tracking-[2px] hover:tracking-[1px] py-1.5 transition-[0.5s]">
      comprar
    </Button>
  );
}

export default AddToCartButton;
