import type { IMagazineTemplateAmmoItem } from "../profile/IAkiProfile.ts";
export interface ISetMagazineRequest {
    Id: string;
    Name: string;
    Caliber: string;
    Items: IMagazineTemplateAmmoItem[];
    TopCount: number;
    BottomCount: number;
}
