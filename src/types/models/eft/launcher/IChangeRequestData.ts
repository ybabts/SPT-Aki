import type { ILoginRequestData } from "../launcher/ILoginRequestData.ts";
export interface IChangeRequestData extends ILoginRequestData {
    change: string;
}
