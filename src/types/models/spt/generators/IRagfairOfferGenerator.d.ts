import { Item } from "../../../models/eft/common/tables/IItem.d.ts";
import { IBarterScheme } from "../../../models/eft/common/tables/ITrader.d.ts";
import { IRagfairOffer } from "../../../models/eft/ragfair/IRagfairOffer.d.ts";
export interface IRagfairOfferGenerator {
    createOffer(userID: string, time: number, items: Item[], barterScheme: IBarterScheme[], loyalLevel: number, price: number, sellInOnePiece: boolean): IRagfairOffer;
}
