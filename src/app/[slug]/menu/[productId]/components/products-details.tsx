"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";
import { Prisma } from "@prisma/client";
import { ChefHatIcon, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductsDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: { avatarImageUrl: true; name: true };
      };
    };
  }>;
}

const ProductsDetails = ({ product }: ProductsDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const handleDecrease = () =>
    setQuantity((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  return (
    <div className="flex flex-col flex-auto relative z-50 rounded-t-3xl py-5 mt-[-1.5rem] p-5">
      <div className="flex-auto">
        <div className="flex items-center gap-1.5">
          <Image
            src={product.restaurant.avatarImageUrl}
            alt={product.restaurant.name}
            width={16}
            height={16}
            className="roudend-full"
          />
          <p className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </p>
        </div>
        <h2 className="text-xl font-semibold mt-1">{product.name}</h2>
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">
            {formatCurrency(product.price)}
          </h3>
          <div className="flex items-center gap-3 text-center">
            <Button
              variant="outline"
              size="sm"
              className="w-8 h-8"
              onClick={handleDecrease}
            >
              <Minus />
            </Button>
            <p className="w-4">{quantity}</p>
            <Button
              variant="destructive"
              size="sm"
              className="w-8 h-8"
              onClick={handleIncrease}
            >
              <Plus />
            </Button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <h4 className="font-semibold">Sobre</h4>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex itens-center gap-1.5">
            <ChefHatIcon size={18} />
            <h4 className="font-semibold">Ingredientes</h4>
          </div>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
      </div>

      <Button className="mt-6 w-full rounded-full">Adicionar à sacola</Button>
    </div>
  );
};

export default ProductsDetails;
