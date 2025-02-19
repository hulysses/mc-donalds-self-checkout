import { Restaurant } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";

interface RestaurantCategoriesProps {
  restaurant: Restaurant;
}

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-3xl bg-white border p-5">
      <div className="flex items-center gap-3">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant.name}
          width={45}
          height={45}
        />
        <div>
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-xs opacity-35">{restaurant.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs text-green-500 mt-3">
        <ClockIcon size={12} />
        <p>Aberto</p>
      </div>
    </div>
  );
};

export default RestaurantCategories;
