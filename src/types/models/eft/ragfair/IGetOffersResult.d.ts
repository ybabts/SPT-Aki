import { IRagfairOffer } from "../../../models/eft/ragfair/IRagfairOffer.d.ts";
export interface IGetOffersResult {
    categories?: Record<string, number>;
    offers: IRagfairOffer[];
    offersCount: number;
    selectedCategory: string;
}
