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
  total: number;
  totalQuantity: number;
  products: CartProduct[];
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  decreaseProduct: (productId: string) => void;
  increaseProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  total: 0,
  totalQuantity: 0,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
  decreaseProduct: () => {},
  increaseProduct: () => {},
  removeProduct: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const totalQuantity = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

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

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((prevProduct) => prevProduct.id !== productId);
    });
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        total,
        totalQuantity,
        products,
        toggleCart,
        addProduct,
        decreaseProduct,
        increaseProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
