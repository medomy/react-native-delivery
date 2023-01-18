import categories from "../data/categories";
// return categories names for restaurant card component
export default function categoriesArrFunc(categoriesIds: number[]) {
    return categoriesIds.map((i) => categories.find((cat) => cat.id === i)?.name);
}