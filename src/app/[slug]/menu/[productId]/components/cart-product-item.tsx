import Image from "next/image";
import { CartContext, CartProduct } from "../../contexts/cart";
import { formatCurrency } from "@/helpers/format-currency";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartProductItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartProductItemProps) => {
  const { decreaseProduct, increaseProduct, removeProduct } =
    useContext(CartContext);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        <div className="space-y-1">
          <p className="text-xs max-w-[90%] truncate">{product.name}</p>
          <p className="text-sm font-semibold text-ellipsis">
            {formatCurrency(product.price)}
          </p>
          <div className="flex items-center gap-1 text-center">
            <Button
              variant="outline"
              className="h-7 w-7 rounded-lg"
              onClick={() => decreaseProduct(product.id)}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="text-xs w-7">{product.quantity}</p>
            <Button
              variant="destructive"
              className="h-7 w-7 rounded-lg"
              onClick={() => increaseProduct(product.id)}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        className="h-7 w-7 rounded-lg"
        onClick={() => removeProduct(product.id)}
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartProductItem;
