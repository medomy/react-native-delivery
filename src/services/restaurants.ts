import restaurants from "../data/restaurants";

export function getRestaurantById(id: number) {
    return restaurants.find((restaurant) => restaurant.id === id);
}

