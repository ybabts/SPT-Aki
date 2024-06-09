import { ILoginRequestData } from "../launcher/ILoginRequestData.d.ts";
export interface IChangeRequestData extends ILoginRequestData {
    change: string;
}
