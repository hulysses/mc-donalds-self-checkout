"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";
export interface CartProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  name: string;
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  decreaseProduct: (productId: string) => void;
  increaseProduct: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
  decreaseProduct: () => {},
  increaseProduct: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const addProduct = (product: CartProduct) => {
    if (products.some((p) => p.id === product.id)) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        )
      );
      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const decreaseProduct = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct;
        }

        if (prevProduct.quantity === 1) {
          return prevProduct;
        }

        return {
          ...prevProduct,
          quantity: prevProduct.quantity - 1,
        };
      });
    });
  };

  const increaseProduct = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id !== productId) {
          return prevProduct;
        }

        return {
          ...prevProduct,
          quantity: prevProduct.quantity + 1,
        };
      });
    });
  };



  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
        addProduct,
        decreaseProduct,
        increaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
