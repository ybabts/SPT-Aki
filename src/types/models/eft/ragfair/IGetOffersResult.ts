import type { IRagfairOffer } from "../../../models/eft/ragfair/IRagfairOffer.ts";
export interface IGetOffersResult {
    categories?: Record<string, number>;
    offers: IRagfairOffer[];
    offersCount: number;
    selectedCategory: string;
}
