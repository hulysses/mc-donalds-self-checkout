import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <p>{product.name}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
