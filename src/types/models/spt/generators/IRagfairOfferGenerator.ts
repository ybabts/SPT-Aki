import type { Item } from "../../../models/eft/common/tables/IItem.ts";
import type { IBarterScheme } from "../../../models/eft/common/tables/ITrader.ts";
import type { IRagfairOffer } from "../../../models/eft/ragfair/IRagfairOffer.ts";
export interface IRagfairOfferGenerator {
    createOffer(userID: string, time: number, items: Item[], barterScheme: IBarterScheme[], loyalLevel: number, price: number, sellInOnePiece: boolean): IRagfairOffer;
}
