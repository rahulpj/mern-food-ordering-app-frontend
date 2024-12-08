import {
  useCreatMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";

import ManageRestaurantForm from "@/forms/manage-restaurant-form/MangeRestaurantForm";

export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreatMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant;

  return (
    <>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={isEditing ? updateRestaurant : createRestaurant}
        isLoading={isCreateLoading || isUpdateLoading}
      />
    </>
  );
}
