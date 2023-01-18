import PriceRating from "../types/enums/priceRating";

// return array for rendering dollar signs activated for affordability in restaurant card
export function affordabilityActivArrFunc(n: PriceRating): number[] {
    let arr: number[] = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

export function affordabilityinActiveArrFunc(n: PriceRating) {
    let arr: number[] = [];
    for (let i = 0; i < (PriceRating.expensive - n); i++) {
        arr.push(i);
    }
    return arr;
}