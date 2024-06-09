import { IMagazineTemplateAmmoItem } from "../profile/IAkiProfile.d.ts";
export interface ISetMagazineRequest {
    Id: string;
    Name: string;
    Caliber: string;
    Items: IMagazineTemplateAmmoItem[];
    TopCount: number;
    BottomCount: number;
}
