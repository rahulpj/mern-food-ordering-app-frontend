import {
  useCreatMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import CuisinesSection from "@/forms/manage-restaurant-form/CuisinesSection";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/MangeRestaurantForm";
import { Separator } from "@radix-ui/react-separator";

export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreatMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  return (
    <>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={createRestaurant}
        isLoading={isLoading}
      />
    </>
  );
}
